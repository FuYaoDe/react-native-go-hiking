import React, {
  StyleSheet,
  PixelRatio,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
const PIXEL_RATIO = PixelRatio.get();
const styles = StyleSheet.create({
  commentContent: {
    flex: 1,
    paddingTop: 10 * PIXEL_RATIO,
    paddingBottom: 3.5 * PIXEL_RATIO,
    marginLeft: 13 * PIXEL_RATIO,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    fontWeight: '700',
    color: 'rgb(198, 118, 69)',
    padding: 2 * PIXEL_RATIO,
    // paddingTop: 3 * PIXEL_RATIO,
    fontSize: 14,
  },
  commentBody: {
    flex: 1,
    marginLeft: 5 * PIXEL_RATIO,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContent: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 14,
    paddingLeft: 20 * PIXEL_RATIO,
    paddingRight: 20 * PIXEL_RATIO,
    paddingTop: 3 * PIXEL_RATIO,
    paddingBottom: 10 * PIXEL_RATIO,
  },
  infoText: {
    flex: 1,
    flexDirection: 'row',
    padding: 2 * PIXEL_RATIO,
    fontSize: 12,
  },
  itemImg: {
    borderRadius: 3,
    width: 42 * PIXEL_RATIO,
    height: 35 * PIXEL_RATIO,
  },
  rightBlock: {
    flex: 1,
    paddingRight: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function PostListItem(props) {
  function onItemPress() {
    props.onItemPress(props.id);
  }
  function info() {
    let infos = [];
    if (props.place) infos.push(<Text style={styles.infoText} key={'place'}>{props.place}</Text>);
    if (props.level) {
      let star = '';
      for (let i = 0; i < props.level; i++) {
        star += '★';
      }
      infos.push(<Text style={styles.infoText} key={'level'}>難易度：{star}</Text>);
    }
    if (props.detail_02) infos.push(<Text style={styles.infoText} key={'detail_02'}>{props.detail_02}</Text>);
    return infos;
  }
  return (
    <View style={props.bakColor}>
      <TouchableOpacity underlayColor={"#f3f3f3"} onPress={onItemPress}>
        <View style={styles.commentContent}>
          <View style={styles.imageContent}>
            <Image source={{ uri: props.img }} style={styles.itemImg} />
          </View>
          <View style={styles.commentBody}>
            <Text style={styles.title} numberOfLines={2} >
              {props.title}
            </Text>
            {info()}
          </View>
        </View>
        <Text style={styles.commentText} numberOfLines={3}>
          {props.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

PostListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  img: React.PropTypes.string,
  onItemPress: React.PropTypes.func,
  bakColor: React.PropTypes.object,
  rightText: React.PropTypes.string,
  rightTextStyle: React.PropTypes.object,
  notificationCount: React.PropTypes.number,
  status: React.PropTypes.string,
  level: React.PropTypes.number,
  detail_02: React.PropTypes.string,
  place: React.PropTypes.string,
};

PostListItem.defaultProps = {
  title: '',
  description: '',
  img: 'https://unsplash.it/200/300/?random',
  onItemPress: () => {},
  bakColor: { backgroundColor: 'rgba(255, 255, 255, 1)' },
};
