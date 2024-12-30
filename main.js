const pageTemplate = `
<div id="{FRONT_OR_BACK_SHORT}{PAGE_NO}" class="{FRONT_OR_BACK}-content">
    <div class="page-image top-left-image">
        <img alt="{NAME_01}" src="{IMAGE_01}">
    </div>
    <div class="page-image top-right-image">
        <img alt="{NAME_02}" src="{IMAGE_02}">
    </div>
    <div class="page-image bottom-left-image">
        <img alt="{NAME_03}" src="{IMAGE_03}">
    </div>
    <div class="page-image bottom-right-image">
        <img alt="{NAME_04}" src="{IMAGE_04}">
    </div>
</div>`;
const emptyPageTemplate = `
<div id="{FRONT_OR_BACK_SHORT}{PAGE_NO}" class="{FRONT_OR_BACK}-content"></div>`;
const doublepageTempalte = `
<div id="p{PAGE_NO}" class="paper">
    <div class="front">
        {FRONT_PAGE}
    </div>
    <div class="back">
        {BACK_PAGE}
    </div>
</div>`;

const cardList = [
    {'name': 'Magician of Black Chaos', 'image': 'https://static.wikia.nocookie.net/yugioh/images/0/06/MagicianofBlackChaos-SBTK-EN-UR-1E.png/revision/latest?cb=20191207202615'},
    {'name': 'Dark Magician Girl', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/96/DarkMagicianGirl-STAX-EN-C-1E.png/revision/latest?cb=20240216023835'},
    {'name': 'Dark Magician', 'image': 'https://static.wikia.nocookie.net/yugioh/images/a/ae/DarkMagician-STAX-EN-C-1E.png/revision/latest?cb=20240216022504'},
    {'name': 'Feueryarou [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/f/fe/Fireyarou-AP08-EN-SP-UE.png/revision/latest/scale-to-width-down/300?cb=20151029022037'},
    {'name': 'Dunkle Energie [C]', 'image': 'https://yugi.wiki/assets/card-images/common/4614116.jpg'},
    {'name': 'Laserkanone [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/c/c3/LaserCannonArmor-LOB-EN-SP-UE.jpg/revision/latest?cb=20121004020907'},
    {'name': 'Silberpfeil und Bogen [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/ba/SilverBowandArrow-LOB-NA-SP-1E.jpg/revision/latest/scale-to-width-down/300?cb=20090329054417'},
    {'name': 'Drachenschatz [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/36/DragonTreasure-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20150402180111'},
    {'name': 'Elektropeitsche [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/f/fd/ElectroWhip-LOB-EN-C-UE.png/revision/latest?cb=20150222044436'},
    {'name': 'Mystischer Mond [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/f/f3/MysticalMoon-YGLD-EN-C-1E.png/revision/latest?cb=20170813170319'},
    {'name': 'Maschinenumwandlungsfabrik [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/8/8c/MachineConversionFactory-LOB-NA-SP-1E.png/revision/latest?cb=20150203142407'},
    {'name': 'Körpertemperatur erhöhen [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/97/RaiseBodyHeat-LOB-NA-SSP-1E.jpg/revision/latest?cb=20090329054631'},
    {'name': 'Folge dem Wind [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/42/FollowWind-LOB-EN-SSP-UE.jpg/revision/latest?cb=20120807034903'},
    {'name': 'Stachelseedra [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/5/52/SpikeSeadra-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054846'},
    {'name': 'Stolperdrahtbestie [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/3c/TripwireBeast-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054905'},
    {'name': 'Roter Totenkopfvogel [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/f/f7/SkullRedBird-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054922'},
    {'name': 'Misairuzame [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/b0/Misairuzame-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055129'},
    {'name': 'Stahl-Oger Grotte #1 [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/30/SteelOgreGrotto1-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055229'},
    {'name': 'Geringerer Drache [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/68/LesserDragon-LOB-EN-C-UE.png/revision/latest?cb=20150222045906'},
    {'name': 'Finsterdornen [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e7/DarkworldThorns-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055257'},
    {'name': 'Schleimechse [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/2/2b/DroolingLizard-LOB-NA-C-UE.png/revision/latest?cb=20150203180926'},
    {'name': 'Panzerseestern [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/73/ArmoredStarfish-LOB-EN-C-UE.png/revision/latest?cb=20150520142931'},
    {'name': 'Succubus-Ritter [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/5/54/SuccubusKnight-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240820191007'},
    {'name': 'Totenkopfdiener [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/b4/SkullServant-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240726172132'},
    {'name': 'Basisinsekt [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/13/BasicInsect-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240730172357'},
    {'name': 'Silberfang [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/3f/SilverFang-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240730213412'},
    {'name': 'Dunkelgrau [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/d/d7/DarkGray-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240731171553'},
    {'name': 'Nemuriko [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/ef/Nemuriko-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815105210'},
    {'name': 'Das 13. Grab [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/ef/The13thGrave-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815105744'},
    {'name': 'Flammen-Manipulator [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/a/a5/FlameManipulator-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815131645'},
    {'name': 'Monster-Ei [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/41/MonsterEgg-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815132437'},
    {'name': 'Feuergras [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/5/59/Firegrass-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815184201'},
    {'name': 'Dunkler König des Abgrunds [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/60/DarkKingoftheAbyss-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816105050'},
    {'name': 'Unterweltlerreflektion #2 [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/70/FiendReflection2-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816132536'},
    {'name': 'Turtle-Tiger [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/40/TurtleTiger-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816185211'},
    {'name': 'Kleiner Drache [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/0/06/PetitDragon-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821110907'},
    {'name': 'Hinotama-Seele [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/2/2a/HinotamaSoul-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816185928'},
    {'name': 'Kagemuscha der blauen Flamme [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/46/KagemushaoftheBlueFlame-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821130631'},
    {'name': 'Zweischnäuziger dunkler Herrscher [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/4e/TwoMouthDarkruler-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821181350'},
    {'name': 'Steinschmelzer [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/c/c5/Dissolverock-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821181625'},
    {'name': 'Tiefenwasser [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/4f/RootWater-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240822110008'},
    {'name': 'Wütender Meereskönig [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/6e/TheFuriousSeaKing-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240824152248'},
    {'name': 'Grüner Phantomkönig [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/c/c7/GreenPhantomKing-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20241025232722'},
    {'name': 'Strahl und Temperatur [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/19/RayTemperature-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20241027183424'},
    {'name': 'Nebelkönig [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/d/df/KingFog-LOB-EN-C-UE.png/revision/latest?cb=20150929041225'},
    {'name': 'Schwert der Legende [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/64/LegendarySword-SS02-EN-C-1E.png/revision/latest?cb=20190129174242'},
    {'name': 'Reißzähne [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/bc/BeastFangs-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20170322141232'},
    {'name': 'Lila Kristall [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/0/0b/VioletCrystal-SBLS-EN-C-1E.png/revision/latest?cb=20190509231530'},
    {'name': 'Buch der geheimen Künste [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/bb/BookofSecretArts-LOB-EU-SP-UE-Reprint.png/revision/latest?cb=20171228022533'},
    {'name': 'Wald [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/37/Forest-SS03-EN-C-1E.png/revision/latest?cb=20200404204040'},
    {'name': 'Ödland [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/5/5f/Wasteland-SBLS-EN-C-1E.png/revision/latest?cb=20190509231729'},
    {'name': 'Sogen [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/90/Sogen-SS02-EN-C-1E.png/revision/latest?cb=20190129175840'},
    {'name': 'Umi [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/99/Umi-SBC1-EN-C-1E.png/revision/latest?cb=20230919000443'},
    {'name': 'Yami [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/79/Yami-SS01-EN-C-1E.png/revision/latest?cb=20190129195218'},
    {'name': 'Rote Medizin [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/3e/RedMedicine-YSD-EN-C-1E.png/revision/latest?cb=20160515211710'},
    {'name': 'Funken [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e1/Sparks-LOB-EN-C-UE.png/revision/latest?cb=20140825155358'},
    {'name': 'Falle entfernen [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/9a/RemoveTrap-LOB-EN-C-UE.png/revision/latest?cb=20160527203736'},
    {'name': 'Tyhone [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/13/Tyhone-LOB-NA-C-1E.jpg/revision/latest?cb=20090329052031'},
    {'name': 'Uraby [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/65/Uraby-SS03-EN-C-1E.png/revision/latest?cb=20200404210013'},
    {'name': 'Gewitztes Phantom [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/5/5f/WittyPhantom-LOB-EN-C-UE.jpg/revision/latest?cb=20171026182158'},
    {'name': 'Harte Rüstung [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e6/HardArmor-LOB-NA-C-1E.png/revision/latest?cb=20151004141818'},
    {'name': 'Menschenfresser [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/43/ManEater-LOB-NA-C-1E.jpg/revision/latest?cb=20090329052727'},
    {'name': 'Armaill [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/42/Armaill-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240802231341'},
    {'name': 'Schrecklicher Terra [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e5/TerratheTerrible-LOB-NA-C-1E.jpg/revision/latest?cb=20090329053137'},
    {'name': 'Kumootoko [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/18/Kumootoko-SS03-EN-C-1E.png/revision/latest?cb=20200404204752'},
    {'name': 'Meda-Bat [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/1c/MedaBat-LOB-EN-C-UE.png/revision/latest?cb=20140825154701'},
    {'name': 'Bezaubernde Nixe [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/3e/EnchantingMermaid-OP03-EN-SP-UE.png/revision/latest?cb=20170330113642'},
    {'name': 'Abscheuliche Keime [C]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/6f/VileGerms-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20161117194843'},
    {'name': 'Spalt [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/b8/Fissure-SDGR-EN-C-1E.png/revision/latest?cb=20141016191745'},
    {'name': 'Zweiklauen-Angriff [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/2/2e/TwoProngedAttack-LOB-EN-R-UE.jpg/revision/latest?cb=20080827044339'},
    {'name': 'Sensenmann der Karten [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/6/62/ReaperoftheCards-LOB-EN-R-UE.png/revision/latest?cb=20140825154905'},
    {'name': 'Harfengeist [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/b5/SpiritoftheHarp-STAS-EN-C-1E.png/revision/latest?cb=20240216003933'},
    {'name': 'Verteidigung stoppen [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/d/dd/StopDefense-DB1-EN-C-UE.png/revision/latest?cb=20141220050545'},
    {'name': 'Kobolds letzte Rettung [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/90/GoblinsSecretRemedy-LOB-EN-R-UE.png/revision/latest?cb=20141213141556'},
    {'name': 'Ewige Flamme [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e6/FinalFlame-LOB-EN-R-UE.jpg/revision/latest?cb=20070330222108'},
    {'name': 'Metalldrache [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/b6/MetalDragon-LOB-EN-R-UE.png/revision/latest?cb=20141213141749'},
    {'name': 'Bewaffneter Ninja [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/b/bb/ArmedNinja-DL13-EN-R-UE-Blue.jpg/revision/latest?cb=20120225210910'},
    {'name': 'Blumenwolf [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/77/FlowerWolf-LOB-EN-R-UE.png/revision/latest?cb=20131207082729'},
    {'name': 'Feuerritter Charubin [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/a/a6/CharubintheFireKnight-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815110521'},
    {'name': 'Dunkler Feuerdrache [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/8/89/DarkfireDragon-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816104247'},
    {'name': 'Aqua Madoor [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/74/AquaMadoor-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821112359'},
    {'name': 'Flammengeist [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/8/8b/FlameGhost-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821131131'},
    {'name': 'Drachenfanggefäß [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/2/2f/DragonCaptureJar-LCYW-EN-R-1E.png/revision/latest?cb=20121006005432'},
    {'name': 'Leichenfledderer [R]', 'image': 'https://yugi.wiki/assets/card-images/common/82542267.jpg'},
    {'name': 'Riesen-Steinsoldat [R]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/0/02/GiantSoldierofStone-STAX-EN-C-1E.png/revision/latest?cb=20240216022204'},
    {'name': 'Schwarzes Loch [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/7/77/DarkHole-STAS-EN-C-1E.png/revision/latest?cb=20240216005915'},
    {'name': 'Raigeki [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/c/c0/Raigeki-SDBT-EN-C-1E.png/revision/latest?cb=20230505010146'},
    {'name': 'Fallgrube [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/0/0a/TrapHole-SDBT-EN-C-1E.png/revision/latest?cb=20230505010407'},
    {'name': 'Polymerisation [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/3/36/Polymerization-RA02-EN-SR-1E.png/revision/latest?cb=20240703233831'},
    {'name': 'Mystische Elfe [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/2/2b/MysticalElf-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240802232602'},
    {'name': 'Drachenfluch [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/e/e1/CurseofDragon-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240819133340'},
    {'name': 'Verräterische Schwerter [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/1/1c/SwordsofRevealingLight-EGS1-EN-C-1E.png/revision/latest?cb=20220707044803'},
    {'name': 'Menschenfresserkäfer [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/9/90/ManEaterBug-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240822190408'},
    {'name': 'Keltischer Wächter [SR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/a/a8/CelticGuardian-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240729171559'},
    {'name': 'Blauäugiger w. Drache [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/89631139.jpg'},
    {'name': 'Dunkler Magier [UR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/a/ae/DarkMagician-STAX-EN-C-1E.png/revision/latest?cb=20240216022504'},
    {'name': 'Gaia, zorniger Ritter [UR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/d/d9/GaiaTheFierceKnight-LOB-EN-UR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240729170051'},
    {'name': 'Rotäugiger blauer Drache [UR]', 'image': 'https://images.ygoprodeck.com/images/cards/74677422.jpg'},
    {'name': 'Wiedergeburt [UR]', 'image': 'https://static.wikia.nocookie.net/yugioh/images/4/40/MonsterReborn-EGO1-EN-C-1E.png/revision/latest?cb=20210920164521'},
    {'name': 'Rechtes Bein der Verbotenen [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/8124921.jpg'},
    {'name': 'Linkes Bein der Verbotenen [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/44519536.jpg'},
    {'name': 'Rechter Arm der Verbotenen [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/70903634.jpg'},
    {'name': 'Linker Arm der Verbotenen [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/7902349.jpg'},
    {'name': 'Exodia, die Verbotene [UR]', 'image': 'https://cdn.formatlibrary.com/images/cards/33396948.jpg'},
    {'name': 'Drachenmeister Gaia [SCR]', 'image': 'https://images.ygoprodeck.com/images/cards/66889139.jpg'},
    {'name': 'Dreihörniger Drache [SCR]', 'image': 'https://images.ygoprodeck.com/images/cards/39111158.jpg'},
];

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
const cardsPerPage = 4;
let currentPage = 1;
let numOfPapers = 3;
let lastPage = numOfPapers + 1;

checkBtn();
fillBook();

function fillBook() {
    const pages = createPages();
    let frontOrBack = 'f';
    let pageNo = 2; // 1 page is cover
    let prevPage = document.getElementById('p1');

    for (let i=0; i<pages.length; i=i+2) {
        let frontPageNo = i;
        let backPageNo = i+1;

        let frontPage = pages[frontPageNo]
            .replaceAll('{PAGE_NO}', pageNo)
            .replaceAll('{FRONT_OR_BACK_SHORT}', 'f')
            .replaceAll('{FRONT_OR_BACK}', 'front');

        let backPage = emptyPageTemplate;
        if (pages[backPageNo] !== undefined) {
            backPage = pages[backPageNo];
        }
        backPage = backPage
            .replaceAll('{PAGE_NO}', pageNo)
            .replaceAll('{FRONT_OR_BACK_SHORT}', 'b')
            .replaceAll('{FRONT_OR_BACK}', 'back');


        let pageLetter = doublepageTempalte
            .replaceAll('{PAGE_NO}', pageNo)
            .replaceAll('{FRONT_PAGE}', frontPage)
            .replaceAll('{BACK_PAGE}', backPage);

        let node = htmlToNode(pageLetter);
        prevPage.after(node);
        pageNo++;

        prevPage = document.getElementById(node.id);
    }

    numOfPapers = pageNo;
    lastPage = numOfPapers + 1;

    let tmpZIndex = 1;
    for (let i=(pageNo-1); i>0; i--) {
        let page = document.getElementById('p' + i);
        page.style.zIndex = tmpZIndex;
        tmpZIndex++;
    }


    console.log(pages);
}

function createPages() {
    let pages = [];
    const chunks = chunkCards(cardList);
    for (let chunk of chunks) {
        const fullChunk = fullArray(chunk, 4);
        pages.push(
            pageTemplate
                .replaceAll('{NAME_01}', fullChunk[0].name)
                .replaceAll('{IMAGE_01}', fullChunk[0].image)
                .replaceAll('{NAME_02}', fullChunk[1].name)
                .replaceAll('{IMAGE_02}', fullChunk[1].image)
                .replaceAll('{NAME_03}', fullChunk[2].name)
                .replaceAll('{IMAGE_03}', fullChunk[2].image)
                .replaceAll('{NAME_04}', fullChunk[3].name)
                .replaceAll('{IMAGE_04}', fullChunk[3].image)
        );
    }

    return pages;
}

function fullArray(array, amount) {
    for (let i=0; i<amount; i++) {
        if (array[i] === undefined) {
            array[i] = {name: '', image: ''};
        }
    }

    return array;
}

function htmlToNode(html) {
    let div = document.createElement('div');
    div.innerHTML = html.trim();

    return div.firstChild;
}

function chunkCards(cards) {
    let chunks = [];
    for (let i = 0; i < cards.length; i += cardsPerPage) {
        chunks.push(
            cards.slice(i, i + cardsPerPage)
        );
    }

    return chunks;
}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function checkBtn() {
    if (currentPage === 1) {
        prevBtn.classList.add("hide");
    } else {
        prevBtn.classList.remove("hide");
    }

    if (currentPage === lastPage) {
        nextBtn.classList.add("hide");
    } else {
        nextBtn.classList.remove("hide");
    }
}

function goNextPage() {
    if(currentPage < lastPage) {
        if (currentPage === 1) {
            openBook();
        }

        const currentPageElement = document.querySelector('#p'+currentPage);
        currentPageElement.classList.add("flipped");
        currentPageElement.style.zIndex = currentPage;

        if (currentPage === lastPage) {
            closeBook(false);
        }

        currentPage++;
    }

    checkBtn();
}

function goPrevPage() {
    if(currentPage > 1) {
        if (currentPage === 2) {
            closeBook(true);
        }
        if (currentPage === 4) {
            openBook();
        }

        const prevPageElement = document.querySelector('#p'+(currentPage - 1));
        prevPageElement.classList.remove("flipped");
        prevPageElement.style.zIndex = (lastPage - currentPage + 1);

        currentPage--;
    }

    checkBtn();
}