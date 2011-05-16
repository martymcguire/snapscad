(function(){
    // This file depends on the runtime extensions, which should probably be moved into this namespace rather than made global

// For use by [choice:<name>] blocks
window.choice_lists = {
  //name: ['value1','value2',...], ...
}

var menus = {
    shapes: menu('Shapes', [
        {
            label: 'cube with width [number:1] depth [number:1] height [number:1] centered? [boolean:false]',
            script: 'cube([{{1}},{{2}},{{3}}],center={{4}});'
        },
        {
            label: 'sphere with radius [number:1]',
            script: 'sphere(r={{1}});'
        },
        {
            label: 'cylinder with height [number:1] bottom radius [number:1] top radius [number:1] centered? [boolean:false]',
            script: 'cylinder(h={{1}},r1={{2}},r2={{3}},center={{4}});'
        },
    ]),
    transform: menu('Transform', [
        {
            label: 'rotate by x: [number:0] y: [number:0] z:[number:0]',
            containers: 1,
            script: 'rotate([{{1}},{{2}},{{3}}]){\n[[1]]}'
        },
        {
            label: 'translate by x: [number:0] y: [number:0] z:[number:0]',
            containers: 1,
            script: 'translate([{{1}},{{2}},{{3}}]){\n[[1]]}'
        },
        {
            label: 'scale by x: [number:1] y: [number:1] z:[number:1]',
            containers: 1,
            script: 'scale([{{1}},{{2}},{{3}}]){\n[[1]]}'
        },
        {
            label: 'color r [number:0.5] g [number:0.5] b [number:0.5] alpha [number:1.0]',
            containers: 1,
            script: 'color([{{1}},{{2}},{{3}},{{4}}]){\n[[1]]}'
        },
    ]),
    operations: menu('Set Operations', [
        {
          label: 'union',
          containers: 1,
          script: 'union(){\n[[1]]}'
        },
        {
          label: 'difference',
          containers: 1,
          script: 'difference(){\n[[1]]}'
        },
        {
          label: 'intersection',
          containers: 1,
          script: 'intersection(){\n[[1]]}'
        },
        {
          label: 'render',
          containers: 1,
          script: 'render(){\n[[1]]}'
        },
    ]),
    control: menu('Control', [
        {
            label: 'for [string:i] between [number:0] and [number:10]', 
            containers: 1, 
            script: 'for({{1}} = [{{2}}:{{3}}]){\n[[1]]}'
        },
        {
            label: 'if [boolean]', 
            containers: 1, 
            script: 'if({{1}}){\n[[1]]}'
        },
        {
            label: 'if [boolean] else', 
            containers: 2, 
            script: 'if({{1}}){\n[[1]]}else{\n[[2]]}'
        },
    ], false),
    operators: menu('Operators', [
        {
            label: '[number:0] + [number:0]', 
            'type': 'number', 
            script: "({{1}} + {{2}})"
        },
        {
            label: '[number:0] - [number:0]', 
            'type': 'number', 
            script: "({{1}} - {{2}})"
        },
        {
            label: '[number:0] * [number:0]', 
            'type': 'number', 
            script: "({{1}} * {{2}})"
        },
        {
            label: '[number:0] / [number:0]',
            'type': 'number', 
            script: "({{1}} / {{2}})"
        },
        {
            label: '[number:0] < [number:0]', 
            'type': 'boolean', 
            script: "({{1}} < {{2}})"
        },
        {
            label: '[number:0] = [number:0]', 
            'type': 'boolean', 
            script: "({{1}} == {{2}})"
        },
        {
            label: '[number:0] > [number:0]', 
            'type': 'boolean', 
            script: "({{1}} > {{2}})"
        },
        {
            label: '[boolean] and [boolean]', 
            'type': 'boolean', 
            script: "({{1}} && {{2}})"
        },
        {
            label: '[boolean] or [boolean]', 
            'type': 'boolean', 
            script: "({{1}} || {{2}})"
        },
        {
            label: 'not [boolean]', 
            'type': 'boolean', 
            script: "(! {{1}})"
        },
        {
            label: '[number:0] % [number:0]', 
            'type': 'number', 
            script: "({{1}} % {{2}})"
        },
        {
            label: 'round [number:0]', 
            'type': 'number', 
            script: "round({{1}})"
        },
        {
            label: 'absolute of [number:10]', 
            'type': 'number', 
            script: "abs({{2}})"
        },
        {
            label: 'arccosine degrees of [number:10]', 
            'type': 'number', 
            script: 'acos({{1}})'
        },
        {
            label: 'arcsine degrees of [number:10]', 
            'type': 'number', 
            script: 'asin({{1}})'
        },
        {
            label: 'arctangent degrees of [number:10]', 
            'type': 'number', 
            script: 'atan({{1}})'
        },
        {
            label: 'ceiling of [number:10]', 
            'type': 'number', 
            script: 'ceil({{1}})'
        },
        {
            label: 'cosine of [number:10] degrees', 
            'type': 'number', 
            script: 'cos({{1}})'
        },
        {
            label: 'sine of [number:10] degrees', 
            'type': 'number', 
            script: 'sin({{1}})'
        },
        {
            label: 'tangent of [number:10] degrees', 
            'type': 'number', 
            script: 'tan({{1}})'
        },
        {
            label: '[number:10] to the power of [number:2]', 
            'type': 'number', 
            script: 'pow({{1}}, {{2}})'
        },
        {
            label: 'round [number:10]', 
            'type': 'number', 
            script: 'round({{1}})'
        },
        {
            label: 'square root of [number:10]', 
            'type': 'number', 
            script: 'sqrt({{1}})'
        }
    ]),
};

var demos = [
    {
        title: "example001",
        description: "Ported from OpenSCAD's example001.scad",
        scripts:[{"klass":"set operations","label":"difference","script":"difference(){\n[[1]]}","containers":1,"offset":{"top":0,"left":0},"sockets":[],"contained":[{"klass":"shapes","label":"sphere with radius [number:1]","script":"sphere(r={{1}});","containers":0,"sockets":["25"],"contained":[],"next":{"klass":"transform","label":"rotate by x: [number:0] y: [number:0] z:[number:0]","script":"rotate([{{1}},{{2}},{{3}}]){\n[[1]]}","containers":1,"sockets":["0","0","0"],"contained":[{"klass":"shapes","label":"cylinder with height [number:1] bottom radius [number:1] top radius [number:1] centered? [boolean:false]","script":"cylinder(h={{1}},r1={{2}},r2={{3}},center={{4}});","containers":0,"sockets":["125","12.5","12.5","true"],"contained":[],"next":""}],"next":{"klass":"transform","label":"rotate by x: [number:0] y: [number:0] z:[number:0]","script":"rotate([{{1}},{{2}},{{3}}]){\n[[1]]}","containers":1,"sockets":["90","0","0"],"contained":[{"klass":"shapes","label":"cylinder with height [number:1] bottom radius [number:1] top radius [number:1] centered? [boolean:false]","script":"cylinder(h={{1}},r1={{2}},r2={{3}},center={{4}});","containers":0,"sockets":["125","12.5","12.5","true"],"contained":[],"next":""}],"next":{"klass":"transform","label":"rotate by x: [number:0] y: [number:0] z:[number:0]","script":"rotate([{{1}},{{2}},{{3}}]){\n[[1]]}","containers":1,"sockets":["0","90","0"],"contained":[{"klass":"shapes","label":"cylinder with height [number:1] bottom radius [number:1] top radius [number:1] centered? [boolean:false]","script":"cylinder(h={{1}},r1={{2}},r2={{3}},center={{4}});","containers":0,"sockets":["125","12.5","12.5","true"],"contained":[],"next":""}],"next":""}}}}],"next":""}]}
];
populate_demos_dialog(demos);

})();
