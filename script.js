const PI = 3.14;
var radius = 6.378e6;
var circumference = 2 * PI * radius;
var surfaceArea = 4 * PI  *(radius**2);
var volume = (4/3) * PI * (radius**3);

document.write('The radius of the sphere is ', radius, ".");
document.write('<br><br>');
document.write('The circumference of the sphere is ', circumference, ".");
document.write('<br><br>');
document.write('The surface area of the sphere is ', surfaceArea, ".");
document.write('<br><br>');
document.write('The volume of the sphere is ', volume, ".");
