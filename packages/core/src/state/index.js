// @flow
import type { CommunicationRecordProps } from "./communication";
import type { EntitiesRecordProps } from "./entities";
import type { RecordFactory, RecordOf } from "immutable";
import { Record } from "immutable";
import { makeCommunicationRecord } from "./communication";
import { makeEntitiesRecord } from "./entities";

export * from "./communication";
export * from "./entities";
export * from "./ids";
export * from "./refs";
export * from "./old";

export type StateRecordProps = {
  communication: RecordOf<CommunicationRecordProps>,
  entities: RecordOf<EntitiesRecordProps>
};

export const makeStateRecord: RecordFactory<StateRecordProps> = Record({
  communication: makeCommunicationRecord(),
  entities: makeEntitiesRecord()
});
