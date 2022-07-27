import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  candidateRegistered,
  storyRegistered
} from "../generated/Registry/Registry"

export function createcandidateRegisteredEvent(
  headProfileId: BigInt,
  headPubId: BigInt,
  index: BigInt,
  headHash: Bytes,
  profileId: BigInt,
  pubId: BigInt
): candidateRegistered {
  let candidateRegisteredEvent = changetype<candidateRegistered>(newMockEvent())

  candidateRegisteredEvent.parameters = new Array()

  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "headProfileId",
      ethereum.Value.fromUnsignedBigInt(headProfileId)
    )
  )
  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "headPubId",
      ethereum.Value.fromUnsignedBigInt(headPubId)
    )
  )
  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam("headHash", ethereum.Value.fromFixedBytes(headHash))
  )
  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  candidateRegisteredEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )

  return candidateRegisteredEvent
}

export function createstoryRegisteredEvent(
  profileId: BigInt,
  pubId: BigInt,
  _hash: Bytes
): storyRegistered {
  let storyRegisteredEvent = changetype<storyRegistered>(newMockEvent())

  storyRegisteredEvent.parameters = new Array()

  storyRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  )
  storyRegisteredEvent.parameters.push(
    new ethereum.EventParam("pubId", ethereum.Value.fromUnsignedBigInt(pubId))
  )
  storyRegisteredEvent.parameters.push(
    new ethereum.EventParam("_hash", ethereum.Value.fromFixedBytes(_hash))
  )

  return storyRegisteredEvent
}
