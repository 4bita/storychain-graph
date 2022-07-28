import {
  candidateRegistered,
  storyRegistered
} from "../generated/Registry/Registry"
import { Story } from "../generated/schema"


export function handlecandidateRegistered(event: candidateRegistered): void {
  let event_id = event.transaction.from.toHex()
  let story = Story.load(event_id)
  if (!story) {
    story = new Story(event_id)
  }

  story.profileId = event.params.profileId
  story.pubId = event.params.pubId
  story.save()
}

export function handlestoryRegistered(event: storyRegistered): void {}
