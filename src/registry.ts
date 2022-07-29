import {
  candidateRegistered,
  storyRegistered
} from "../generated/Registry/Registry"
import { Story } from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'


export function handlecandidateRegistered(event: candidateRegistered): void {
  log.info("Try to register a story", [])
  let event_id = event.transaction.from.toHex()
  let story = new Story("123")

  story.profileId = event.params.profileId
  story.pubId = event.params.pubId
  log.info("Story is loaded. id: '{}', profileId: {}, pubid: {}",
         [story.id, story.profileId.toString(), story.pubId.toString()])
  story.save()
  log.info("End saving", [])
}

export function handlestoryRegistered(event: storyRegistered): void {}
