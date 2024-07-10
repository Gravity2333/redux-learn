import { connect } from "react-redux";
import {
  fetchBannerInfoAction,
} from "../../store/actionCreators";
import { useEffect } from "react";

function Banner({ bannerInfo, fetchBannerInfo }) {
  useEffect(() => {
    fetchBannerInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ textAlign: "center", height: "30px" }}>{bannerInfo}</div>
  );
}

function mapStateToProps({ bannerInfo }) {
  return {
    bannerInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBannerInfo: () => {
      dispatch(fetchBannerInfoAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
