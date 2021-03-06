// @flow
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import Toolbar from "../../src/components/toolbar";
import { dummyStore } from "../../src/dummy";

import {
  TOGGLE_STICKY_CELL,
  REMOVE_CELL,
  SEND_EXECUTE_REQUEST,
  CLEAR_OUTPUTS,
  TOGGLE_CELL_INPUT_VISIBILITY,
  TOGGLE_CELL_OUTPUT_VISIBILITY,
  CHANGE_CELL_TYPE,
  TOGGLE_OUTPUT_EXPANSION
} from "../../src/actionTypes";

describe.skip("toolbar provider", () => {
  const store = dummyStore();
  const dropdown = { hide: () => {} };

  const setup = props =>
    mount(
      <Provider store={store}>
        <Toolbar {...props} />
      </Provider>
    );

  test("toggle Sticky Cell works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(TOGGLE_STICKY_CELL);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .toggleStickyCell();
  });

  test("Remove Cell works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(REMOVE_CELL);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ type: "code", id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .removeCell();
  });

  test("execute cell works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.source).toBe("source");
      expect(action.type).toBe(SEND_EXECUTE_REQUEST);
      done();
    };
    store.dispatch = dispatch;
    const func = args => args;
    const cell = { get: func };
    const toolbar = setup({ id: "cell", cell });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .executeCell();
  });

  test("clear outputs works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(CLEAR_OUTPUTS);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .clearOutputs(dropdown);
  });

  test("change Input Visibility works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(TOGGLE_CELL_INPUT_VISIBILITY);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .toggleCellInputVisibility(dropdown);
  });

  test("change Output Visibility works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(TOGGLE_CELL_OUTPUT_VISIBILITY);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .toggleCellOutputVisibility(dropdown);
  });

  test("change Cell Type works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.to).toBe("markdown");
      expect(action.type).toBe(CHANGE_CELL_TYPE);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell", type: "code" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .changeCellType(dropdown);
  });

  test("toggle output expansion works", done => {
    const dispatch = action => {
      expect(action.id).toBe("cell");
      expect(action.type).toBe(TOGGLE_OUTPUT_EXPANSION);
      done();
    };
    store.dispatch = dispatch;
    const toolbar = setup({ id: "cell" });
    toolbar
      .find("ToolbarView")
      .childAt(0)
      .getElement()
      .toggleOutputExpansion(dropdown);
  });
});
