import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  PixelRatio,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { AddPostViewCount, Api, DelatePostAction, } from '../../store/action/action';
import { ViewComponent } from '../../components/statistic/ViewComponent';
import { LikeList } from '../../components/LikeList';
import { Share } from '../../components/share';
import { Post } from '../../components/post/Post';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommmentModal } from '../../components/comment/CommmentModal';
import { SpamModal } from '../../components/spamModal';
import { Posts } from '../../components/Posts';


const windowWidth = Dimensions.get('window').width;

const dpi = PixelRatio.get() * 160;
export const SinglPageScreen = ({ route }) => {
  const user = useSelector((st) => st.userData)
  const staticdata = useSelector(st => st.static);
  const [showView, setShowView] = useState(null)
  const [likeClose, setLikeClose] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [horiznotal, setHoriznotal] = useState(false)
  const [showComment, setShowComment] = useState(false)
  const [commentData, setCommentData] = useState({ parentId: "", categoryId: "" })
  const dispatch = useDispatch()
  const [showStatisitc, setShowStatistic] = useState(0)
  const [selecteidId, setSelectidId] = useState(null)
  const [showShare, setShowShare] = useState(false)

  const insets = useSafeAreaInsets();
  const navigation = useNavigation()
  const [showInfo, setShowInfo] = useState(false)

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#000000');
      StatusBar.setTranslucent = true;
      return () => {
        StatusBar.setTranslucent = true;
        StatusBar.setBackgroundColor("white");
      };
    }, [data?.id])
  );


  const AddToBack = () => {
    navigation.replace('TabNavigation', { screen: "ProfileNavigation" })
  }

  useEffect(() => {
    dispatch(AddPostViewCount({ post_id: data?.id }, staticdata.token))
    setShowStatistic(user.allData.data?.view_statistics_open_text)
  }, [staticdata.token, data])


  const ChangeViewStatisticsOpenText = () => {
    setShowStatistic(0)
    if (showStatisitc) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${staticdata.token}`);
      fetch(`${Api}/view_statistics_open_text`, {
        method: 'POST',
        headers: myHeaders,
      })
        .then(response => response.json())
        .then(r => {
        })
        .catch(error => {
        });
    }
  }


  const deletData = useCallback((post_id) => {
    dispatch(DelatePostAction({ post_id }, staticdata.token))
    navigation.goBack()
  }, [dispatch, staticdata.token]);


  useEffect(() => {
    if (route.params?.description?.length) {
      setData({ ...data, description: route.params.description })
    }
  }, [route.params.description])


  useFocusEffect(
    useCallback(() => {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${staticdata.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ post_id: route.params.id }),
        redirect: 'follow',
      };

      setLoading(true);

      fetch(`${Api}/single_page_post`, requestOptions)
        .then(response => response.json())
        .then(r => {
          setLoading(false);
          setData(r.data);
        })
        .catch(error => {
          console.error("Fetch error:", error);
          setLoading(false);
        });

      return () => {
        setData(null);
      };
    }, [route.params.id, staticdata.token])
  );

  if (loading) {
    return <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 40 }}>
      <ActivityIndicator color="#FFC24B" />
    </View>
  }
  return (
    <SafeAreaView style={[{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', height: '100%', }]}>
      <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        {data && <Posts
          photos={data?.photo}
          surname={data?.user.surname}
          avatar={data?.user.avatar}
          auth_user_book={data?.auth_user_book}
          created_at={data?.created_at}
          cveta={data?.cveta}
          name={data?.user.name}
          description={data?.description && JSON.parse(data?.description)}
          id={data?.id}
          background={data.background}
          font_size={data.font_size}
          userID={data?.user.id}
          podcherknuti={data?.podcherknuti}
          liked={data?.like_auth_user.findIndex((elm, i) => elm.user_id == user.data.id) >= 0}
          comment_count={data?.comment_count}
          like_count={data?.like_count}
          view_count={data?.view_count}
          color={data?.color}
          font_family={data?.font_family}
          deletData={(e) => deletData(e)}
          setShowShare={(e) => setShowShare(e)}
          setShowLike={() => setLikeClose(true)}
          setSelectidId={(id) => setSelectidId(id)}
          setShowView={() => setShowView(true)}
          setShowComment={() => setShowComment(true)}
          setShowStatistic={() => ChangeViewStatisticsOpenText()}
          setCommentData={(e) => setCommentData(e)}
          many_category={data?.many_category}

          addToblack={(e) => AddToBack(e)}
          setShowInfo={(e) => setShowInfo(e)}
          setPostUserId={(e) => setPostUserId(e)}

          my={user?.data.id != data?.user.id ? false : true}
          showStatisitc={showStatisitc}
        />}
      </View>
      {
        showView && <ViewComponent
          id={data?.id}
          big={true}
          token={staticdata.token}
          close={(e) => setShowView(e)}
          selectedVidioId={data?.photo[activeImage]}
        />
      }
      {
        likeClose && <LikeList
          close={(e) => setLikeClose(false)}
          token={staticdata.token}
          id={data?.id}
        />
      }
      {
        showShare && <Share
          close={() => setShowShare(false)}
          postId={data?.id}
          open={showShare}
          big={true}
          user_id={user?.allData.data?.id}
        />
      }
      {
        showComment && <CommmentModal
          CommentCount={(add) => {
            if (add) {
              setData({ ...data, comment_count: data.comment_count + 1 })
            }
            else {
              setData({ ...data, comment_count: data.comment_count - 1 })
            }
          }}
          close={() => setShowComment(false)}
          commentData={commentData}
        />
      }
      {
        showInfo && <SpamModal
          close={() => setShowInfo(false)}
          postUserId={data?.user.id}
          addToblack={(e) => AddToBack(e)}
        />
      }
    </SafeAreaView >
  );
};


const styles = StyleSheet.create({
});
