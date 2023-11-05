function goNowus() {
    var url = document.getElementById("url").value;
    var regex = /^https:\/\/now\.us\/play\/([^/]+)\/(\d+)\/([^/]+)$/;
    if (regex.test(url)) {
      url = url.replace("https://now.us", "");
      window.open(url);
    } else {
      alert("Please enter a valid now.us URL and try again (Use https:// at the start of your URL)!");
    }
  }
  function goNowusButtons(url) {
    var regex = /^https:\/\/now\.us\/play\/([^/]+)\/(\d+)\/([^/]+)$/;
    if (regex.test(url)) {
      url = url.replace("https://now.us", "");
      window.open(url);
    } else {
      alert("Please enter a valid now.us URL and try again (Use https:// at the start of your URL)!");
    }
  }
  