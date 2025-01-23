const PI = 3.14;
let radius = 6.378e6;
let circumference = 2 * PI * radius;
let surfaceArea = 4 * PI  *(radius**2);
let volume = (4/3) * PI * (radius**3);

document.write('The radius of the sphere is ', radius, ".");
document.write('<br><br>');
document.write('The circumference of the sphere is ', circumference, ".");
document.write('<br><br>');
document.write('The surface area of the sphere is ', surfaceArea, ".");
document.write('<br><br>');
document.write('The volume of the sphere is ', volume, ".");
