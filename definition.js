Blockly.Blocks['arm_init'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_init",
        message0: "thiết lập servo giữa %1 phải %2 trái %3 đầu gắp %4",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "base",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "right",
            options: [
              ["S2", "1"],
              ["S1", "0"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "left",
            options: [
              ["S3", "2"],
              ["S1", "0"],
              ["S2", "1"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "gripper",
            options: [
              ["S4", "3"],
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_setup'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_setup",
        message0: "về tọa độ gốc",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveGrip'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_moveGrip",
        message0: "%1 đầu gắp",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              ["Đóng", "90"],
              ["Mở", "0"]
            ],
          }
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveBase'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveBase",
        "message0": "xoay servo chính giữa góc %1 (0-180)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveRight'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveRight",
        "message0": "xoay servo bên phải góc %1 (0-180)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveLeft'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveLeft",
        "message0": "xoay servo bên trái góc %1 (0-180)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveRZ'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveLeft",
        "message0": "di chuyển đầu gắp tới vị trí R %1 Z %2",
        "args0": [
          {
            "type": "input_value",
            "name": "radius",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "height",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

// Python Code

Blockly.Python['arm_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  var base = block.getFieldValue('base');
  var right = block.getFieldValue('right');
  var left = block.getFieldValue('left');
  var gripper = block.getFieldValue('gripper');
  Blockly.Python.definitions_['import_arm'] = 'from arm import *';
  Blockly.Python.definitions_['create_arm'] = 'arm = Arm(' + base + ', ' + right + ', ' + left + ', ' + gripper + ')';
  var code = '';
  return code;
};

Blockly.Python['arm_setup'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "arm.setup()\n";
  return code;
};

Blockly.Python['arm_moveGrip'] = function(block) {
  // TODO: Assemble Python into code variable.
  var action = block.getFieldValue('action');
  var code = "arm.moveGripper(" + action + ")\n";
  return code;
};

Blockly.Python["arm_moveBase"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveBase(" + angle + ")\n";
  return code;
};

Blockly.Python["arm_moveRight"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveRight(" + angle + ")\n";
  return code;
};

Blockly.Python["arm_moveLeft"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveLeft(" + angle + ")\n";
  return code;
};

Blockly.Python["arm_moveRZ"] = function (block) {
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveRZ(" + radius + ', ' + height + ")\n";
  return code;
};