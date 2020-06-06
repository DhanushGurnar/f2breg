function register form {
    var x = document.label["fname"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }