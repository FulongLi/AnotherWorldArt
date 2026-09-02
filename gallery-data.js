'use strict'

// Static manifest for GitHub Pages. Keep the original 4K files for focus mode and
// use lightweight thumbnails in the grid so the 122-card collection loads quickly.
const dragonDriveFiles = [
  "000_光属性_AP4400_POW1_金色翼龙战士_4K.png",
  "001_无属性_AP2300_POW0_白色幼龙_4K.png",
  "002_光属性_AP2700_POW1_红白圣龙_4K.png",
  "003_风属性_AP3000_POW1_冰晶白猿_4K.png",
  "004_雷属性_AP3000_POW0_黑金装甲飞龙_4K.png",
  "005_水属性_AP4000_POW1_碧绿长颈水龙_4K.png",
  "006_炎属性_AP1900_POW1_绿白毒翼兽_4K.png",
  "007_雷属性_AP3200_POW0_蓝色机械翼龙_4K.png",
  "008_暗属性_AP2900_POW2_骷髅铠甲魔龙_4K.png",
  "009_甲属性_AP3500_POW0_灰橙装甲翼龙_4K.png",
  "010_光属性_AP2300_POW2_绿翼双头龙_4K.png",
  "011_光属性_AP3000_POW0_白色剑翼机械龙_4K.png",
  "012_甲属性_AP4300_POW0_银甲双刃龙战士_4K.png",
  "013_雷属性_AP8600_POW2_蓝黑双镰翼龙_4K.png",
  "014_无属性_AP5200_POW2_白红黄金翼圣龙_4K.png",
  "015_光属性_AP0_POW0_白色幼角龙_4K.png",
  "016_风属性_AP3700_POW0_银白羽翼龙骑士_4K.png",
  "017_风属性_AP3500_POW1_红蓝四臂兽龙_4K.png",
  "018_炎属性_AP3500_POW0_白金红翼龙_4K.png",
  "019_风属性_AP4400_POW1_青蓝机械枪翼龙_4K.png",
  "020_暗属性_AP5200_POW1_紫金双翼魔龙_4K.png",
  "021_光暗属性_AP4200_POW1_红白青铠甲龙_4K.png",
  "022_甲属性_AP2700_POW3_黑金翼甲龙_4K.png",
  "023_水属性_AP4100_POW1_白鬃独角龙_4K.png",
  "024_雷属性_AP3000_POW1_蓝白电翼龙_4K.png",
  "025_光属性_AP5300_POW2_金银炮翼龙_4K.png",
  "026_风属性_AP2500_POW1_红首鱼龙_4K.png",
  "027_风属性_AP4900_POW2_双首黑翼龙_4K.png",
  "028_地属性_AP4300_POW2_白色犬龙_4K.png",
  "029_风属性_AP4900_POW2_双首黑翼龙_版本2_4K.png",
  "030_Option_旋风白色幼龙_4K.png",
  "031_暗属性_AP2200_POW1_红黑铠甲龙_4K.png",
  "032_光属性_AP3500_POW0_金绿翼龙_4K.png",
  "033_风属性_AP2800_POW1_绿首巨口蛇龙_4K.png",
  "034_光属性_AP4500_POW1_红白巨钳铠甲龙_4K.png",
  "035_光属性_AP3200_POW1_橙色草原象龙_4K.png",
  "036_风属性_AP2800_POW1_绿白金翼鸟龙_4K.png",
  "037_雷属性_AP4800_POW2_蓝色双臂翼龙_4K.png",
  "038_Option_橙衣少年拳击_4K.png",
  "039_Option_驭龙魔术师_4K.png",
  "040_火属性_AP5800_POW2_赤焰巨龙王_4K.png",
  "041_光属性_AP2700_POW2_红白翼龙战士_4K.png",
  "042_水属性_AP2000_POW1_黑蓝角蛇龙_4K.png",
  "043_地属性_AP500_POW0_棕色翼猫_4K.png",
  "044_火属性_AP3800_POW2_火焰萌龙_4K.png",
  "045_炎属性_AP3100_POW2_红色机械翼龙_4K.png",
  "046_金属性_AP6800_POW2_星界黑金巨龙_4K.png",
  "047_炎属性_AP2100_POW1_紫红晶刃龙_4K.png",
  "048_雷属性_AP0_POW0_蓝色电刺兽_4K.png",
  "049_光属性_AP3300_POW1_黄色萌龙_4K.png",
  "050_光属性_AP2400_POW1_花冠翼龙_4K.png",
  "051_水属性_AP2600_POW0_城堡龟龙_4K.png",
  "052_水属性_AP4300_POW1_巨口深海鱼龙_4K.png",
  "053_炎属性_AP4900_POW1_橙翼火龙_4K.png",
  "054_地属性_AP3700_POW2_巨角岩翼兽_4K.png",
  "055_水属性_AP700_POW1_独角海豹龙_4K.png",
  "056_地属性_AP2300_POW2_赤金奔袭龙_4K.png",
  "057_地属性_AP5200_POW1_树冠幻翼龙_4K.png",
  "058_暗属性_AP2000_POW1_重炮机械龙_4K.png",
  "059_暗属性_AP3500_POW1_黑金双翼龙_4K.png",
  "060_地属性_AP6500_POW1_披风合成巨兽_4K.png",
  "061_Option_红围巾少年觉醒_4K.png",
  "062_风属性_AP4400_POW1_红银交叉翼龙_4K.png",
  "063_风属性_AP6000_POW2_蓝白圣翼龙_4K.png",
  "064_光属性_AP3400_POW2_红白盾甲龙_4K.png",
  "065_炎属性_AP5700_POW1_多首赤蛇龙_4K.png",
  "066_Option_时空断裂风暴_4K.png",
  "067_炎属性_AP700_POW0_光球触须龙_4K.png",
  "068_光属性_AP2600_POW0_黑翼珠冠兽_4K.png",
  "069_Option_橙发少女召唤_4K.png",
  "070_炎属性_AP600_POW1_熔岩甲胄巨兽_4K.png",
  "071_光属性_AP1000_POW1_白色飞翔兽_4K.png",
  "072_光属性_AP3000_POW0_七彩圣翼鸟_4K.png",
  "073_光属性_AP2500_POW1_白色独角幼龙_4K.png",
  "074_水属性_AP4400_POW1_白色鳍翼龙_4K.png",
  "075_Option_银发少年冰龙_4K.png",
  "076_暗属性_AP2400_POW1_紫色重装机械龙_4K.png",
  "077_暗属性_AP900_POW1_黑银长角龙_4K.png",
  "078_光属性_AP2500_POW1_红白拳甲龙_4K.png",
  "079_光属性_AP3000_POW0_蓝白剑翼龙_4K.png",
  "080_Option_都市雷暴_4K.png",
  "081_DragonParts_NeptuneEdge_海神之刃_4K.png",
  "082_Option_绿西装青年召唤_4K.png",
  "083_Option_赤发少年冲锋_4K.png",
  "084_风属性_AP5000_POW1_眼轮伴生兽_4K.png",
  "085_水属性_AP600_POW1_蓝橙海翼龙_4K.png",
  "086_风属性_AP2100_POW0_棕色蝠翼龙_4K.png",
  "087_光属性_AP1300_POW1_淡紫幼犬兽_4K.png",
  "088_雷属性_AP800_POW2_蓝银机械犀龙_4K.png",
  "089_地属性_AP5400_POW2_熔岩晶柱巨兽_4K.png",
  "090_Option_夕暮龙群_4K.png",
  "091_暗属性_AP1900_POW2_骸骨蛛网龙_4K.png",
  "092_地属性_AP600_POW1_钻头臂小龙_4K.png",
  "093_地属性_AP4300_POW2_王冠角翼龙_4K.png",
  "094_CardList_DragonDrive_PremiumPack_4K.png",
  "095_风属性_AP3100_POW1_镰刃飞龙_4K.png",
  "096_Option_龙驱伙伴集合_4K.png",
  "097_暗属性_AP3800_POW2_赤白多刃龙_4K.png",
  "098_暗属性_AP4300_POW2_黑翼骑士龙_4K.png",
  "099_风属性_AP4600_POW0_白金翼狮龙_4K.png",
  "100_炎属性_AP3500_POW0_橙银铠翼龙_4K.png",
  "101_暗属性_AP2200_POW2_蓝紫机械龙_4K.png",
  "102_风属性_AP5900_POW2_黑刃翼龙_4K.png",
  "103_炎属性_AP3000_POW1_赤焰多首龙姬_4K.png",
  "104_光属性_AP2300_POW2_紫晶冰翼龙_4K.png",
  "105_地属性_AP6200_POW1_蓝角巨兽_4K.png",
  "106_炎属性_AP5000_POW1_黑钢重装机龙_4K.png",
  "107_光属性_AP4700_POW1_白金长翼龙_4K.png",
  "108_甲属性_AP2400_POW1_赤红蟹甲龙_4K.png",
  "109_光属性_AP900_POW1_粉红宝翼龙_4K.png",
  "110_风属性_AP1300_POW1_蓝角飞翼龙_4K.png",
  "111_光属性_AP2700_POW1_白蓝武斗龙_4K.png",
  "112_水属性_AP3400_POW3_绿银翼龙_4K.png",
  "113_光属性_AP2300_POW1_紫金翼龙_4K.png",
  "114_雷属性_AP3900_POW2_白蓝天穹龙_4K.png",
  "115_炎属性_AP3800_POW1_苍焰铠蛇龙_4K.png",
  "116_甲属性_AP2500_POW2_绿甲龟龙_4K.png",
  "117_王属性_AP8000_POW4_星界黑龙_4K.png",
  "118_风属性_AP4700_POW2_绿枪翼龙_4K.png",
  "119_炎属性_AP2600_POW0_旋尾赤翼龙_4K.png",
  "120_炎属性_AP6300_POW0_苍白炎冠龙_4K.png",
  "121_炎属性_AP1400_POW1_紫黑炮翼兽_4K.png",
]

function dragonDriveEntry(filename) {
  const number = filename.slice(0, 3)
  const stem = filename.replace(/^\d{3}_/, '').replace(/_4K\.png$/, '')
  let prompt

  const card = stem.match(/^([^_]+)_AP(\d+)_POW(\d+)_(.+)$/)
  const option = stem.match(/^Option_(.+)$/)
  const part = stem.match(/^DragonParts_([^_]+)_(.+)$/)
  const cardList = stem.match(/^CardList_(.+)$/)

  if (card) {
    const [, attribute, ap, pow, name] = card
    prompt = `${number} · ${name} · ${attribute} · AP ${ap} · POW ${pow}`
  } else if (option) {
    prompt = `${number} · ${option[1]} · Option`
  } else if (part) {
    prompt = `${number} · ${part[1]} ${part[2]} · Dragon Parts`
  } else if (cardList) {
    prompt = `${number} · ${cardList[1].replaceAll('_', ' ')} · Card List`
  } else {
    prompt = `${number} · ${stem.replaceAll('_', ' ')}`
  }

  return {
    id: `dragon-drive-${number}`,
    w: 2675,
    h: 3840,
    prompt,
    src: encodeURI(`images/dragon drive/${filename}`),
    thumb: `images/thumbnails/dragon-drive/${number}.jpg`,
  }
}

window.GALLERY_IMAGES = [
  // logo_svg.svg is 44×36; w/h is scaled up for the gallery layout.
  {id: 'logo', w: 880, h: 720, prompt: 'SCF Another World Art', src: 'images/logo/logo_svg.svg'},
  {id: 'dragon', w: 1024, h: 1024, prompt: 'Spirit Connect — dragon concept art', src: 'images/dragons/dragon.svg'},
  {id: 'long_creater', w: 1024, h: 1536, prompt: 'Spirit Connect — creator / workshop concept', src: 'images/dragons/long_creater.png'},
  {id: 'long_light', w: 1024, h: 1024, prompt: 'Spirit Connect — light & atmosphere concept', src: 'images/dragons/long_light.png'},
  {id: 'long_nature', w: 1024, h: 1024, prompt: 'Spirit Connect — nature landscape concept', src: 'images/dragons/long_nature.png'},
  {id: 'long_sea', w: 1024, h: 1024, prompt: 'Spirit Connect — sea & coast concept', src: 'images/dragons/long_sea.png'},
  ...dragonDriveFiles.map(dragonDriveEntry),
]
