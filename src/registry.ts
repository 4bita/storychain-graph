import {
  candidateRegistered,
  storyRegistered
} from "../generated/Registry/Registry"
import { Story } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'


export function handlecandidateRegistered(event: candidateRegistered): void {}

export function handlestoryRegistered(event: storyRegistered): void {
  log.info("Try to register a story", [])
  let event_id = event.transaction.from.toHex()
  let story = Story.load(event_id)
  if (!story) {
    story = new Story(event_id)
    story.profileId = event.params.profileId
    story.pubId = event.params.pubId
    story.save()
  }

  log.info("Story is loaded. id: '{}', profileId: {}, pubid: {}",
      [story.id, story.profileId.toString(), story.pubId.toString()])
  log.info("End saving", [])
}
