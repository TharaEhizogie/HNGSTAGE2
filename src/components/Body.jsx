import React from "react";
import slack from "../assets/slackicon.svg";
import icon from "../assets/Icon.svg";
import Button from "./Buttons";

function Main() {
  return (
    <div>
      <Button
        link={"https://twitter.com/Tharaaa_xx"}
        id={"twitter"}
        linkName={"Twitter link"}
      />
      <Button
        link={"https://hng9.slack.com"}
        id={"slack"}
        linkName={"@Tharaomo"}
      />
      <Button
        link={"https://training.zuri.team/"}
        id={"btn_zuri"}
        linkName={"Zuri Team"}
      />
      <Button
        link={"https://books.zuri.team/"}
        id={"books"}
        linkName={"Books"}
      />
      <Button
        link={"https://books.zuri.team/"}
        id={"python_books"}
        linkName={"Python Books"}
      />
      <Button
        link={"https://background.zuri.team/"}
        id={"pitch"}
        linkName={"Background Check for Coders"}
      />
      <Button
        link={"https://books.zuri.team/design-rules"}
        id={"book_design"}
        linkName={"Design Books"}
      />
      <Button link={'/contact'} id={"contact"} linkName={"Contact "} />
      <Button />

      <div className="slackicons">
        <img src={slack} alt="" className="slack-icon" />
        <img src={icon} alt="" />
      </div>
    </div>
  );
}

export default Main