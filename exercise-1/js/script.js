function loopPyramid(num) {
  for (var i = 0; i < num; i++) {
    for (var j = num; j > i; j--) {
      document.write("*");
    }
    document.write("<br>");
  }
}

loopPyramid(6);

var profile = {
  name: "Utsav Dhoj Joshi",
  education: [{
    name: "Kathmandu College of Management",
    date: "2016"
  }, {
    name: "United Academy",
    date: "2011"
  }, {
    name: "DAV",
    date: "2009"
  }]
};

document.write("<br>");
document.write(profile.name);
document.write("<br>");
document.write("Education:");
document.write("<br>");
for (var i = 0; i < profile.education.length; i++) {
  document.write("Name: " + profile.education[i].name + ", Date: " + profile.education[i].date);
  document.write("<br>");
}
