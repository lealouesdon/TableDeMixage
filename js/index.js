/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//gloabl
var max = 100;

var courbe = document.getElementById("Courbe");


// courbe.setAttribute(
//   "d",
//   "M 1,602 C 114,500,158,500,270,500 S 411,500,541,500,683,500,811,500 S 1080, 602, 1080, 602 H0Z"
// );


//document.getElementById("body").style["width"] = screen.width;
//document.getElementById("body").style["height"] = screen.height;
//slider 1
var slider1 = document.getElementById("myRange1");
slider1.value+=60;
var output1 = document.getElementById("s1");
var circle1 = document.getElementById("p1");
output1.innerHTML = slider1.value;
var c = 500;

slider1.oninput = function() {
  var oldValue = Number(output1.innerHTML);
  if (Number(slider2.value) + Number(this.value) > max) {
    var value = slider2.value;
    slider2.value = value - (this.value - oldValue);
    output2.innerHTML = slider2.value;
    circle2.style.padding = (slider2.value*0.06 + 5)+"vw";
  }
    output1.innerHTML = this.value;
    circle1.style.padding = (this.value*0.06 + 5)+"vw";
    calcVal();
    courbeSvg();

};
//slider 2
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("s2");
var circle2 = document.getElementById("p2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  var oldValue = Number(output2.innerHTML);
  if (Number(slider1.value) + Number(this.value) > max) {
    var value = slider1.value;
    slider1.value = value - (this.value - oldValue);
    output1.innerHTML = slider1.value;
    circle1.style.padding = (slider1.value*0.06 + 5)+"vw";
  }
    output2.innerHTML = this.value;
    circle2.style.padding = (this.value*0.06 + 5)+"vw";
    calcVal();
    courbeSvg();

};
//slider 3
var slider3 = document.getElementById("myRange3");
slider3.value+=40;
var output3 = document.getElementById("s3");
var circle3 = document.getElementById("p3");
output3.innerHTML = slider3.value;


function calcVal() {
  slider3.value = max - (Number(slider1.value) + Number(slider2.value));
  output3.innerHTML = slider3.value;
  circle3.style.padding = (slider3.value*0.06 + 5)+"vw";
  courbeSvg();
}

courbeSvg();

function courbeSvg() {
  var modif = "M0 150 V 100 C 10 100, 10 " +
    (100-Number(slider1.value)) +
    ", 20 " +
    (100-Number(slider1.value)) +
    " S 30 " +
    (100-Number(slider2.value)) +
    ", 40 " +
    (100-Number(slider2.value)) +
    " S 50 " +
    (100-Number(slider3.value)) +
    ", 60 " +
    (100-Number(slider3.value)) +
    " S 70 100, 80 100 V 80 150 Z";
    // "M 1,602 C 114, 500, 158, " +
    // (Number(slider1.value) - 100) * -5 +
    // ", 270, " +
    // (Number(slider1.value) - 100) * -5 +
    // " S 411, " +
    // (Number(slider2.value) - 100) * -5 +
    // ", 541, " +
    // (Number(slider2.value) - 100) * -5 +
    // ", 683," +
    // (Number(slider3.value) - 100) * -5 +
    // ", 811, " +
    // (Number(slider3.value) - 100) * -5 +
    // " S 1080, 602, 1080, 602 H0Z";

  courbe.setAttribute("d", modif);
}
