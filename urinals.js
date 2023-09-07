function getFreeUrinals(urinals) {
    if (urinals.includes("11")) {
      return -1;
    }
  
    return (urinals.match(/(^|0)0(?!1)/g) || []).length;
  }
  console.log(getFreeUrinals("11"))
  console.log(getFreeUrinals("34"))