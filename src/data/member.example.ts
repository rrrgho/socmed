import Theme from "../config/Theme";
import Member1 from "../assets/images/member-1.png"
import Member2 from "../assets/images/member-2.png"
import Member3 from "../assets/images/member-3.png"

const MemberData = [
  {
    "id":1,
    "category": "INFLUENCER",
    "account": "@gella_97",
    "online_status": "Online 3 min ago",
    "thumbnail": Member1,
    "color": Theme.color_category.influencer.primary
  },
  {
    "id":2,
    "category": "PERSONALITY",
    "account": "@notstella_00",
    "online_status": "Online 7 hr ago",
    "thumbnail": Member2,
    "color": Theme.color_category.personality.primary
  },
  {
    "id":3,
    "category": "PERSONALITY",
    "account": "@dee_posh",
    "online_status": "Online a day ago",
    "thumbnail": Member3,
    "color": Theme.color_category.personality.primary
  },
  {
    "id":4,
    "category": "PERSONALITY",
    "account": "@dee_posh",
    "online_status": "Online a day ago",
    "thumbnail": Member3,
    "color": Theme.color_category.personality.primary
  }
]

export default MemberData
