import {
  candidateRegistered,
  storyRegistered
} from "../generated/Registry/Registry"
import { Story } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'


export function handlecandidateRegistered(event: candidateRegistered): void {}

export function handlestoryRegistered(event: storyRegistered): void {
  let event_id = event.block.number.toString()
  log.info("Register a story with id:", [event_id])
  let story = Story.load(event_id)
  if (!story) {
    story = new Story(event_id)
    story.profileId = event.params.profileId
    story.pubId = event.params.pubId
    story.save()
    log.info('Successfully saved new story', [])
  }
  else {
    log.info('Story with id: {} already exist', [event_id])
  }
}
