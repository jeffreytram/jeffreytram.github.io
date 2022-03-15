import React from "react"
import ContentLayout from "../components/ContentLayout";

function ChickenTraders(props) {
  return (
    <div>
      <ContentLayout
        title="Chicken Traders"
        period="September 2019 - January 2020"
        description="Chicken Traders is a game based on Space Trader, a
        2002 strategy game for PDAs. The main objective of the game is to
        earn money trading amongst the different regions in the universe.
        Throughout your journey, you will face random encounters and news
        events that may make things more difficult!"
        tech={['HTML5', 'CSS3', 'JavaScript', 'Python']}
        pageLink="https://chickentraders.pythonanywhere.com/"
        githubRepo="https://github.com/jeffreytram/Chicken-Traders"
        snapshot="chicken-traders"
        bgIcon="chicken-traders-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default ChickenTraders;