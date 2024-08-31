function Message({ toMessage }) {
  function txtMsg() {
    switch (toMessage) {
      case "red":
        return "Passion, excitement, love";
      case "pink":
        return "Soft, reserved, earthy";
      case "purple":
        return "Mysterious, noble, glamorous";
      case "blue":
        return "Wisdom, hope, reason, peace";
      case "green":
        return "Nature, growth, freshness";
      case "orange":
        return "Warmth, kindness, joy";
    }
  }
  function colName() {
    switch (toMessage) {
      case "red":
        return "Red";
      case "pink":
        return "Pink";
      case "purple":
        return "Purple";
      case "blue":
        return "Blue";
      case "green":
        return "Green";
      case "orange":
        return "Orange";
    }
  }

  return (
    <div className="text-white text-5xl md:text-6xl  flex justify-center  flex-col w-full scale-90 md:scale-100 text-center top-36 md:top-56 fixed mt-4">
      <h4 className="text-3xl md:text-4xl">{colName()}</h4>
      {txtMsg() || "Choose your emotion"}
    </div>
  );
}
export default Message;
