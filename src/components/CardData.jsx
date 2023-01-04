const cardData = [
  {
    id: 1,
    img: " https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/48275661_10156786597667403_2969998798903836672_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=idHThNlcqFkAX_uUeXe&_nc_ht=scontent-arn2-1.xx&oh=00_AfAEkZOx1UCmwlvzv-V6-XNkSdbr3UWgSSr5IYIUbrpR8g&oe=63DB989E",
    name: "Niki",
    info: "Niki is a furious doctor who is the master of his craft, hindered only by one thing... his declining cognitive ability due to his age",
    path: "/memory-game/info/Niki",
  },
  {
    id: 2,
    img: "https://scontent-arn2-1.xx.fbcdn.net/v/t31.18172-8/10838034_1037412039618674_5707569287147358393_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f9d7a1&_nc_ohc=Wlk5Ja-y29oAX8R435h&_nc_ht=scontent-arn2-1.xx&oh=00_AfAd0wUgFQN0bi4Se939Is8LGh9CKLJ3CsMrXz4XeasM_A&oe=63DB7A31",
    name: "Marco",
    info: "Bald lol.. but has dad powers.. be careful.. use his kids against him to capture him ",
    path: "/memory-game/info/Marco",
  },

  {
    id: 3,
    img: "https://scontent-arn2-1.xx.fbcdn.net/v/t31.18172-8/18623356_1480169288712226_6021094202144056560_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qx5GwZgPoGAAX8RCEZD&_nc_ht=scontent-arn2-1.xx&oh=00_AfAZPeMe51BkrDXCXsRLrzSUd1pKu4e592jq5uIOqo1ZJQ&oe=63DB7944",
    name: "Ville",
    info: "A highly dangerous individual.. but just till him that you will play CSGO with him and he will surrender",
    path: "/memory-game/info/Ville",
  },
  {
    id: 4,
    img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/156355482_10159772273327366_5974091504262353153_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MU--c4UNhJQAX-JUg9R&tn=SobsFvSAUY4xaynf&_nc_ht=scontent-arn2-1.xx&oh=00_AfBR9latGadHb-RhEAcP0Itc0G9j4GXEB6zJj7FgB9tz-g&oe=63DB7FEB",
    name: "Toffe",
    info: "A dangerous hacker feared by all the security experts around the world.. But you can't use a computer without power so unplug the power cable and capture him!!",
    path: "/memory-game/info/Toffe",
  },
  {
    id: 5,
    img: "https://scontent-arn2-2.xx.fbcdn.net/v/t31.18172-8/21743571_1392450090873298_8046357076268234569_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wsfV1nzJzTUAX_PGsy1&tn=SobsFvSAUY4xaynf&_nc_ht=scontent-arn2-2.xx&oh=00_AfDfeqjVRvcYFmNjj_xJber-70f7ncpEbrO1Ea9dw1WmNQ&oe=63DB9D48",
    name: "Robin",
    info: "Robin has a guitar and can play so loud that it breaks your ears.. don't try to attack him without earplugs.",
    path: "/memory-game/info/Robin",
  },
  {
    id: 6,
    img: "https://cdn1-photos.shl.se/21/09/ff7f0e86cfe5cf6668dc042a8d311ed0/thumb_1920.jpg?w=1960&fm=jpg&auto=format&compress&bg=fff&s=a90e95d7c68da1a032d2c9f6f5aeb93e",
    name: "Julia",
    info: "Can skate so fast that you won't catch her... track her rout and set a banana on the route so she will slip.. seize the moment and attack",
    path: "/memory-game/info/Julia",
  },
  {
    id: 7,
    img: "https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/283855038_10159906354951684_268049654657484845_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yAZgvVXS1xAAX_ujqee&_nc_ht=scontent-arn2-1.xx&oh=00_AfCrOtEkdLO3Ew6FSIMXR5GiAK3oMaq-9QrQ-uiAkLib5Q&oe=63B9D1BE",
    name: "Tanja",
    info: "has 4 dogs that will eat you alive.. make sure to eliminate the dogs first..",
    path: "/memory-game/info/Tanja",
  },
  {
    id: 9,
    img: "https://lh5.googleusercontent.com/cEdh2ZY_s_iVtA5mF9dzWjMPluHkQQaU36DpnLNELQu8vyRlbypAgdsy_Zz7godDikA=w2400",
    name: "Mummu",
    info: "The mastermind of this group of criminals.. proceed with caution...highly dangerous.. do not engage alone without support..",
    path: "/memory-game/info/Mummu",
  },
  {
    id: 10,
    img: "https://lh6.googleusercontent.com/Zh9JcSbdCKxa83s5Brr1ajDaGXq9Tdd7lK9QDQa4d8vlll0jtThTzAlwgxtsbdzP4_U=w2400",
    name: "Joni",
    info: "Probably forced into the criminal activities by his relatives.. wants to play Path of Exile and so he will probably willingly surrender and go back to kellari",
    path: "/memory-game/info/Joni",
  },
  {
    id: 11,
    img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/161675548_835829157277784_961041505681196644_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gYO15MDD8TEAX-oa6qM&tn=SobsFvSAUY4xaynf&_nc_ht=scontent-arn2-1.xx&oh=00_AfDFhErTZOdXrdfWv-GkqlBK8SnpcnnHGwHyVoWki6dPVQ&oe=63DB8462",
    name: "Rasmus",
    info: `OUUR RADARS ARE CAPTURING HIGHLY DANGEROUS READINGS FROM THIS INDIVIDUAL !!!!ALERT ALERT!!!! INFORMATION UNKNOWN PROCEED WITH CAUTION!!!!!! `,
    path: "/memory-game/info/Rasmus",
  },
];
export default cardData;
