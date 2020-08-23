/* @flow */
import initStoryshots, {
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";
const { advanceTo } = require("jest-date-mock");

advanceTo(new Date(2018, 5, 27, 0, 0, 0));

initStoryshots({
  framework: "react",
  suite: "FileProperties",
  test: multiSnapshotWithOptions({}),
});
