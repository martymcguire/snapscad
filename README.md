# SnapSCAD

## Description

[OpenSCAD](http://openscad.org/) is an awesome language for developing 3D models.  If you're a programmer.

I've talked with many folks who love the idea of OpenSCAD, but beg off of using it because they "Don't know how to program."

[MIT's Scratch](http://scratch.mit.edu/) has helped countless children learn to program using drag-and-drop snappable elements to produce real programs.

These seem like two great flavors that would be better together.  So, here's SnapSCAD, a simple JavaScript app that allows you to build up OpenSCAD scripts via drag-and-drop snappable elements.

It's built on top of [Waterbear](http://waterbearlang.com/), a JavaScript toolkit for making block syntax programming systems inspired by Scratch.

SnapSCAD (like Waterbear) is pre-alpha software, very raw, and in constant flux right now.

## Installation

SnapSCAD is pure Javascript. Simply `git clone` the project and open `index.html` in your browser!

## Usage

1. Drag blocks together in the Script Blocks tab to form an OpenSCAD script.
2. Copy and paste the generated script from the Script Text tab into OpenSCAD and render!

## Demo

Live demo coming soon.

## Contact Info

SnapSCAD is meant as a simple proof-of-concept, but if you are interested in improving it feel free to drop me an email at schmartissimo AT gmail DOT com.

## Acknowledgements

* [Dethe Elza's Watebear](http://waterbearlang.com)
* [OpenSCAD](http://openscad.org/)
* [Scratch](http://scratch.mit.edu)

## Contributors

* Marty McGuire
* Dethe Elza

## SnapSCAD License

Copyright 2011 Marty McGuire

SnapSCAD code licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />

## Waterbear License

Copyright 2011 Dethe Elza

Waterbear code licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Waterbear Documentation</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://waterbearlang.com/" property="cc:attributionName" rel="cc:attributionURL">Dethe Elza</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.apache.org/licenses/LICENSE-2.0" rel="cc:morePermissions">http://www.apache.org/licenses/LICENSE-2.0</a>.

# TODOs

* "Copy to Clipboard" functionality
* Nicely format generated code
* Vector-builder for arrays
* Support variable definition, binding, and use (e.g. for loops are unusable)
* Integrate with [CloudSCAD](http://cloudscad.com/) or similar.
* Watch for updates from upstream. :)
* Add to this list!
