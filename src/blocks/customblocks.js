/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';
import { Block } from '../Blockly';
//Temi block
Blockly.Blocks['speech_say'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Say")
        .appendField(new Blockly.FieldTextInput("hello world"), "utterance")
        .appendField("in")
        .appendField(new Blockly.FieldDropdown([["Thai","th"], ["English","en"], ["Japanese","JP"]]), "language_options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Type what you want temi to say, select languge either English, Japanese or Thai");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_person'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Call")
        .appendField(new Blockly.FieldDropdown([["Man","fe1090ed941db12ed1d350730031ea5b"], ["Pear","4990c18cea5e6604cc1adc384fe224e8"], ["AjVirach","67696f1ff709a3b0804ae43641ed8d85"]]), "contact");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(1);
 this.setTooltip("");
 this.setHelpUrl("Select person to call");
  }
};

Blockly.Blocks['event_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Event:")
        .appendField(new Blockly.FieldDropdown([["out of bed","EVT_OUT_OF_BED"], ["sitting","EVT_SIT_ON_BED"]]), "event");
    this.appendStatementInput("event_out_of_bed")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("event for block (none-sequence)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['locations_goto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go to")
        .appendField(new Blockly.FieldTextInput("kitchen"), "location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Command temi to go to a pre-defined location");
 this.setHelpUrl("");
  }
};

// UNDERDEVELOP -------------------------------------------

Blockly.Blocks['openwebsite'] = { //readydeployed
  init: function() {
    this.appendDummyInput()
        .appendField("URL")
        .appendField(new Blockly.FieldTextInput("url"), "url");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("Connect with website if you want");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movement_turn'] = {  //ready deployed
  init: function() {
    this.appendDummyInput()
        .appendField("turn by")
        .appendField(new Blockly.FieldNumber(0, -180, 180, 0), "angle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("angle range between-180 to 180");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tilt_head'] = { //ready deployed
  init: function() {
    this.appendDummyInput()
        .appendField("tilt")
        .appendField(new Blockly.FieldNumber(0, -45, 45, 0), "Tilt_angle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("Tilt temi by a specified angle. Choose a value between -45 and 45.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movement_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward","forward"], ["Backward","backward"], ["Left","left"], ["right","right"]]), "direction")
        .appendField("Distance")
        .appendField(new Blockly.FieldNumber(0, 0), "distance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Control Direction & movement");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['locations_go_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Return Home");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("Command temi to return Home");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movement_turn2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn by angle")
        .appendField(new Blockly.FieldAngle(0), "movement");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("angle range between-180 to 180");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movement_tilt2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tilt angle")
        .appendField(new Blockly.FieldAngle(0), "Tilt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("angle range between-45 to 45");
 this.setHelpUrl("");
  }
};

// Blockly.Blocks['call_person'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Call")
//         .appendField(new Blockly.FieldTextInput(""), "contact");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("Call a person in contact list");
//  this.setHelpUrl("");
//   }
// };
