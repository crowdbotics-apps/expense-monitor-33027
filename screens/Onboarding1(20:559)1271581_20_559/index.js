import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_20_561}>
        <View style={styles.View_20_562}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cf/16c5/4bddfd9cc645ac763cd5fa3dbc869c22"
            }}
            style={styles.ImageBackground_20_563}
          />
        </View>
      </View>
      <View style={styles.View_20_568}>
        <View style={styles.View_20_569}>
          <View style={styles.View_20_570}>
            <View style={styles.View_20_571}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caab/993f/594da27309c0c40dcc5d05d09ee1c660"
                }}
                style={styles.ImageBackground_20_572}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2407/baa7/e7eb2e1de0c669875f5989a2c8caebad"
                }}
                style={styles.ImageBackground_20_573}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ccb/f661/b6d4da63e7b814803833d9a1c0a9b704"
                }}
                style={styles.ImageBackground_20_574}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e81a/65e2/d5e83db08638802c9be805b95975527f"
                }}
                style={styles.ImageBackground_20_575}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c743/b963/0ff89843fa18d9a1881bc2e506423847"
                }}
                style={styles.ImageBackground_20_576}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ead1/becc/74181011940b6805ee43117be1c58f24"
                }}
                style={styles.ImageBackground_20_577}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02aa/506f/c9289d277f88f4572546edab44ce7c02"
                }}
                style={styles.ImageBackground_20_578}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4882/4724/f13bd2d56174a9ef485f6fa3420746dd"
                }}
                style={styles.ImageBackground_20_579}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4ca/cbaf/4f2cbeb2a0e7170935fd5e4aba984c00"
                }}
                style={styles.ImageBackground_20_580}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecb9/21ff/67928077cae59d19f528bde135ac669a"
                }}
                style={styles.ImageBackground_20_581}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a25b/5570/4f8dc6e1e72b410a8731590685252275"
                }}
                style={styles.ImageBackground_20_582}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984d/6a01/e29849d1b64e241f754f322f5daa80bb"
                }}
                style={styles.ImageBackground_20_583}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7020/aeb8/39ff1cab524915317704e0f96a2c15ae"
                }}
                style={styles.ImageBackground_20_584}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faf2/039a/cdf3b58323ad53eaa28a1ed0b69e5421"
                }}
                style={styles.ImageBackground_20_585}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f0/bbb7/2bba647fb139a49cd4a400e6cdf0f202"
                }}
                style={styles.ImageBackground_20_586}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e0b/73d7/e6a42e4ce18deef9ab9eebabf5e8d879"
                }}
                style={styles.ImageBackground_20_587}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/746d/7f58/0adf1478b10254834a46da997eb33a1a"
                }}
                style={styles.ImageBackground_20_588}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f94e/ad67/050bfab8073af61769b83092376ecba9"
                }}
                style={styles.ImageBackground_20_589}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c707/b052/9d15fe643757148971af0e23895476b5"
                }}
                style={styles.ImageBackground_20_590}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3a/2538/e577c6aaeea1b847a42d6447dd7b9e03"
                }}
                style={styles.ImageBackground_20_591}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a9e/3583/cb406f8d68635087051bef52d2fad7a6"
                }}
                style={styles.ImageBackground_20_592}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9c3/0ae7/8626c39c8bf4bd91df3aa01a7988ffcf"
                }}
                style={styles.ImageBackground_20_593}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a6c/d2eb/f503f4a97deef8cdf6fe752b66718a2a"
                }}
                style={styles.ImageBackground_20_594}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4285/6409/5bbb3eccbb44cf37b98f35da3fc4b184"
                }}
                style={styles.ImageBackground_20_595}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d0e/af7c/6fe5d8c262edc5e1021c9ef80bee472c"
                }}
                style={styles.ImageBackground_20_596}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a9/ad77/c0f923bb641bc296ab9486c01df2c24d"
                }}
                style={styles.ImageBackground_20_597}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef9/af58/3824707cfa92de5a3bc0b74f8ba75f6c"
                }}
                style={styles.ImageBackground_20_598}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8f9/dcaf/f5db1712b264d4cb8e2fe73c99bb5444"
                }}
                style={styles.ImageBackground_20_599}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_600}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_601}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_602}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_603}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_604}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_605}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_606}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_607}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_608}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_609}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_610}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_611}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_612}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_614}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_615}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_616}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_617}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_618}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_619}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_620}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_621}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_622}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_623}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_624}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_625}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_626}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_627}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_628}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_629}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_630}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_631}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_632}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_633}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_634}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_635}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_636}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_637}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_638}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_639}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_640}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_641}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9426/ebd9/7e1ba4aa4b88e6e4cddeb917cff766e9"
                }}
                style={styles.ImageBackground_20_642}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fc2/367f/29dbca7f814f133519e59678696a9851"
                }}
                style={styles.ImageBackground_20_643}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1128/cd6f/e9cb23a82ee673ec45094b0a33ea108a"
                }}
                style={styles.ImageBackground_20_644}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/455f/ee7f/bc93ecf8fe7bc01554e4a25a0f8348c8"
                }}
                style={styles.ImageBackground_20_645}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7a0/a269/a778ab9a74f11766f6f9eac817207a51"
                }}
                style={styles.ImageBackground_20_646}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b01/c734/3cdf9f6c4d23ee95affacbf65005309a"
                }}
                style={styles.ImageBackground_20_647}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4270/c088/ce9dbf5e5e168aa8ed55d141105d85d7"
                }}
                style={styles.ImageBackground_20_648}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53e6/f105/482e3d2e4887e39881e1a06e0cbcb5d0"
                }}
                style={styles.ImageBackground_20_649}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad61/fc03/8773c169dba6d0c54ee89db9c064c336"
                }}
                style={styles.ImageBackground_20_650}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6561/21df/085306945b8518c2a97882086a9b694c"
                }}
                style={styles.ImageBackground_20_651}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c45b/0e3a/ca8e78f9b347d9151f8267dbe7b0fede"
                }}
                style={styles.ImageBackground_20_652}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e320/bc2d/f73ba723fb62b37898795cbbd5ddaad0"
                }}
                style={styles.ImageBackground_20_653}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb68/9e6a/e619aef78f335b76e83492fd6698323a"
                }}
                style={styles.ImageBackground_20_654}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97a/9b4a/290fb1c7fe14bff1b74f96629e18f193"
                }}
                style={styles.ImageBackground_20_655}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b05/a363/af031509f8fa889b7b7fbe2b4cfa398b"
                }}
                style={styles.ImageBackground_20_656}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e186/6c8d/ebb83b17e650db15d760374681383308"
                }}
                style={styles.ImageBackground_20_657}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb3/b479/1b97edcf06b6e18fdd5ec16f92a1bc2f"
                }}
                style={styles.ImageBackground_20_658}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad2/afb1/1b02e4cb7302c6c0f16d8d6300115a3e"
                }}
                style={styles.ImageBackground_20_659}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15b0/66e4/910ec9272a3c19843fa1906934e43ace"
                }}
                style={styles.ImageBackground_20_660}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e980/cf2e/a8034503cdf55facfbcff042b98c4d45"
                }}
                style={styles.ImageBackground_20_661}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d739/2edd/2c06cbfcbda06b4a60af06958557c8dd"
                }}
                style={styles.ImageBackground_20_662}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8f4/329f/a42dadb9e0c2c390fb7b3c0b793c489b"
                }}
                style={styles.ImageBackground_20_663}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/134f/cbc5f4b1b126840503613bd22874b547"
                }}
                style={styles.ImageBackground_20_664}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f8/2bd2/5dde732b122b2b89c7c480bb805f38bf"
                }}
                style={styles.ImageBackground_20_665}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39d/7e90/a036fe41cd14314843acb1f23de33f87"
                }}
                style={styles.ImageBackground_20_666}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c83a/b655/1ca1a5f9bcc1d12528621c08498985c5"
                }}
                style={styles.ImageBackground_20_667}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe9f/ad0a/eb690130d39393259619b41fa81475ad"
                }}
                style={styles.ImageBackground_20_668}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361e/2d8d/d4f5ac0509d158443e77dc3cb428074b"
                }}
                style={styles.ImageBackground_20_669}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65b/5015/07e6c14cd0ab655920fcada5e5977c1f"
                }}
                style={styles.ImageBackground_20_670}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1328/8a88/3c064a32793971c92a6e55e6245a7f18"
                }}
                style={styles.ImageBackground_20_671}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5fe/a53e/207f8f9a54bd8e30ff7d85ef25d0e8f1"
                }}
                style={styles.ImageBackground_20_672}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee16/1077/925b0baeaab4ffef49e6ba99f0583538"
                }}
                style={styles.ImageBackground_20_673}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c871/3d1a/3b854355e05e05e9c27c0ae2bdefaa38"
                }}
                style={styles.ImageBackground_20_677}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276b/01b4/4876688c55de59d505896df2e53eecf0"
                }}
                style={styles.ImageBackground_20_678}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5353/5abf/2d05701305e812f41da74a2037f09e3c"
                }}
                style={styles.ImageBackground_20_679}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/281a/40aa/5d69b817daf35cf0ec26b542e63eda8a"
                }}
                style={styles.ImageBackground_20_680}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a9/ad77/c0f923bb641bc296ab9486c01df2c24d"
                }}
                style={styles.ImageBackground_20_681}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef9/af58/3824707cfa92de5a3bc0b74f8ba75f6c"
                }}
                style={styles.ImageBackground_20_682}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8f9/dcaf/f5db1712b264d4cb8e2fe73c99bb5444"
                }}
                style={styles.ImageBackground_20_683}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aabe/89b1/a01ff8a4910607cdf5bb571591f4d279"
                }}
                style={styles.ImageBackground_20_684}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dab5/883c/0f2985338af88a9e7755b4e1c56df4de"
                }}
                style={styles.ImageBackground_20_685}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/388c/59ec/f1e80f473c44e5ea393f36c0119fe9f1"
                }}
                style={styles.ImageBackground_20_686}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/388c/59ec/f1e80f473c44e5ea393f36c0119fe9f1"
                }}
                style={styles.ImageBackground_20_687}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abf7/85fd/dbf446a918c19d44f908ff345827636d"
                }}
                style={styles.ImageBackground_20_688}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abf7/85fd/dbf446a918c19d44f908ff345827636d"
                }}
                style={styles.ImageBackground_20_689}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/c18d/05e7b6f557eeba218f8379f3149070de"
                }}
                style={styles.ImageBackground_20_690}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3659/c18d/05e7b6f557eeba218f8379f3149070de"
                }}
                style={styles.ImageBackground_20_691}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a565/85f5/0b93f05a6c959dbd50a15b9d3f72f27c"
                }}
                style={styles.ImageBackground_20_692}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a565/85f5/0b93f05a6c959dbd50a15b9d3f72f27c"
                }}
                style={styles.ImageBackground_20_693}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de57/107e/c39abeef1a0df6d293cc18eb62188331"
                }}
                style={styles.ImageBackground_20_694}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                }}
                style={styles.ImageBackground_20_695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc63/eb64/556e5d4f0a11e4bb0cc875b2ab86a96c"
                }}
                style={styles.ImageBackground_20_696}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37cd/7430/356fe28c3362fd4f9d728dd60d2c75f0"
                }}
                style={styles.ImageBackground_20_697}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2f/a5d0/a5de03838004437b0fecb706fb325879"
                }}
                style={styles.ImageBackground_20_698}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55f6/3204/86813254287fc5bfd7b707d7f3a2b89d"
                }}
                style={styles.ImageBackground_20_699}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cce/3b62/9316a189da1fb55a6820de134b9186ff"
                }}
                style={styles.ImageBackground_20_700}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0007/66e3/44fc5fa559ba1328ec43a461c70a6fac"
                }}
                style={styles.ImageBackground_20_701}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bbe/16ad/bc165ff2d62732e3d5f0c058d2ff9c8b"
                }}
                style={styles.ImageBackground_20_702}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b75/f785/d38beeeb4724f765798d49c1d536bd53"
                }}
                style={styles.ImageBackground_20_703}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b75/f785/d38beeeb4724f765798d49c1d536bd53"
                }}
                style={styles.ImageBackground_20_704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ee/2382/802e0ffe8fd936c245ced23c7727df4d"
                }}
                style={styles.ImageBackground_20_705}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e34d/c451/bf49519fb9266bc0d4332b2ddecf7a3c"
        }}
        style={styles.ImageBackground_20_706}
      />
      <View style={styles.View_20_707}>
        <Text style={styles.Text_20_707}>Save your money conveniently.</Text>
      </View>
      <View style={styles.View_20_708}>
        <Text style={styles.Text_20_708}>
          Get 5% cash back for each transaction and spend it easily.
        </Text>
      </View>
      <View style={styles.View_20_712}>
        <View style={styles.View_20_709} />
        <View style={styles.View_20_710} />
        <View style={styles.View_20_711} />
      </View>
      <View style={styles.View_20_713}>
        <View style={styles.View_20_714} />
        <View style={styles.View_20_715}>
          <View style={styles.View_20_716} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d08c/9c23/3f2fd7949e9226f4ade50753a1f29ce9"
            }}
            style={styles.ImageBackground_20_717}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/39b3/a55f3aa71b8d2a0fcb535cede127dfe2"
            }}
            style={styles.ImageBackground_20_718}
          />
        </View>
        <View style={styles.View_20_719}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4015/6825/020aa901d4cee34fe8745c31ff4c6d7c"
            }}
            style={styles.ImageBackground_20_720}
          />
        </View>
        <View style={styles.View_20_722}>
          <Text style={styles.Text_20_722}>Next</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_20_561: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_20_562: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_20_563: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_20_568: {
    width: wp("75%"),
    height: hp("28%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_20_569: {
    width: wp("75%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_20_570: {
    width: wp("75%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_20_571: {
    width: wp("75%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_20_572: {
    width: wp("75%"),
    height: hp("5%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_20_573: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_574: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_20_575: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_576: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_577: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_578: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_20_579: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_20_580: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_581: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_20_582: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_583: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_584: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_585: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_20_586: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_20_587: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_588: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_20_589: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_20_590: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_20_591: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_20_592: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_593: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_20_594: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_20_595: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_20_596: {
    width: wp("58%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_20_597: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_20_598: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_20_599: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_20_600: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_20_601: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_20_602: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_20_603: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_604: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_605: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_606: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_607: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_608: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_609: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_610: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_611: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_20_612: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_613: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_614: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_615: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_616: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_617: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_618: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_20_619: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_20_620: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_20_621: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_622: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_623: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_20_624: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_625: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_626: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_627: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_628: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_629: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_630: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_631: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_632: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_20_633: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_634: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_635: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_636: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_637: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_638: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_20_639: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_640: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_641: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_642: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_643: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_644: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_645: {
    width: wp("19%"),
    height: hp("17%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_646: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_20_647: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_20_648: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_649: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_20_650: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_20_651: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_652: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_20_653: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_20_654: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_655: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_20_656: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_657: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_20_658: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_20_659: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_20_660: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_661: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_20_662: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_20_663: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_20_664: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_665: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_666: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_667: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_668: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_20_669: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_670: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_671: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_20_672: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_20_673: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_20_677: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_20_678: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_679: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_680: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_20_681: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_682: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_20_683: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_20_684: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_20_685: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_20_686: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_20_687: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_20_688: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_20_689: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_20_690: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_20_691: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_20_692: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_20_693: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_20_694: {
    width: wp("34%"),
    height: hp("17%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_20_695: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_20_696: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_20_697: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_20_698: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_20_699: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_20_700: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_20_701: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_20_702: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_20_703: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_20_704: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_20_705: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_20_706: {
    width: wp("125%"),
    height: hp("64%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-33%")
  },
  View_20_707: {
    width: wp("75%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_20_707: {
    color: "rgba(39, 67, 253, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_708: {
    width: wp("75%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_20_708: {
    color: "rgba(124, 42, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_712: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("101%")
  },
  View_20_709: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(42, 70, 255, 1)"
  },
  View_20_710: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(181, 191, 255, 1)"
  },
  View_20_711: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(181, 191, 255, 1)"
  },
  View_20_713: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("96%")
  },
  View_20_714: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_715: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_716: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_20_717: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_20_718: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("-17%")
  },
  View_20_719: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_20_720: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_20_722: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_20_722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
