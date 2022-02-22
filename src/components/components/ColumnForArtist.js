import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNftsBreakdownNoThunk } from "../../store/actions/thunks";
import { clearNfts, clearFilter } from "../../store/actions";
import NftCard from "./NftCard";

const ColumnNewRedux = ({
  showLoadMore = true,
  shuffle = false,
  authorId = null,
}) => {
  const dispatch = useDispatch();
  const [nftItems, setNftItems] = useState([]);
  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  const setNfts = async (authorId) => {
    const [data, err] = await fetchNftsBreakdownNoThunk(authorId);
    console.log({ data, err });
    if (!err && data) {
      setNftItems([...data]);
    }
  };

  useEffect(() => {
    setNftItems([])
    setNfts(authorId);
  }, [authorId]);

  useEffect(() => {
    return () => {
      dispatch(clearFilter());
      dispatch(clearNfts());
    };
  }, [dispatch]);

  console.log()

  return (
    <div className="row">
      {nftItems &&
        nftItems.map((nft, index) => (
          <NftCard
            nft={nft}
            key={index}
            onImgLoad={onImgLoad}
            height={height}
          />
        ))}
    </div>
  );
};

export default memo(ColumnNewRedux);
