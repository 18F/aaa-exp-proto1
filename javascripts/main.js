$(document).ready(function() {
  $('#tab-container').easytabs();
  
  render_all();
});

var tabs = [
  "chris",
  "etams",
  "par",
  "pegasys"
];

var li = function(content) {
  return "<li>" + content + "</li>";
};

var p = function(content) {
  return "<p>" + content + "</p>";
};

var get_value_from_types = function(key, callback) {
  var value = "";
  
  $.ajax({
    url: "data/types.json",
    async: false,
    success: function(res) {
      value = res[key];
    }
  });
  
  return value;
};

var render_all = function() {
  render_chris();
  render_etams();
  render_par();
  render_pegasys();
};

var render = function(path, element) {
  $.getJSON(path, function(data) {
    var types = data.types;
    var content = _.map(types, function(my_type) {
      var my_value = get_value_from_types(my_type);
      return li(my_type+": " + my_value);
    }).join("");
    $(element).html(content);
  });
};

var render_chris = function() {
  render("data/chris.json", "#chris");
};

var render_etams = function() {
  render("data/etams.json", "#etams");
};

var render_par = function() {
  render("data/par.json", "#par");
};

var render_pegasys = function() {
  render("data/pegasys.json", "#pegasys");
};







    