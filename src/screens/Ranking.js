// src/screens/Ranking.js
import React, { useState } from "react";
import FriendRanking from "../components/ranking/FriendRanking";
import AllRanking from "../components/ranking/AllRanking";
import TabBar from "../components/BottomBar";
import RankInviteFriendsModal from "../components/ranking/RankInviteFriendsModal";
import friendIcon from "../assets/icons/friend.svg";

import {
  RankingContainer,
  RankingHeader,
  RankingTitle,
  AddFriendButton,
  RankingTabs,
  RankingTabButton,
  ActiveTabIndicator,
  RankingListWrapper,
} from "../styles/Ranking.styled.js";

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 예시 데이터
  const friendRanking = [
    { rank: 1, userName: "user 1", leaf: 8, seed: 0, time: "10 시간 20 분" },
    { rank: 2, userName: "user 2", leaf: 4, seed: 1, time: "09 시간 13 분" },
    { rank: 3, userName: "user 3", leaf: 2, seed: 1, time: "06 시간 54 분" },
    { rank: 4, userName: "user 4", leaf: 1, seed: 1, time: "05 시간 33 분" },
  ];

  const allRanking = [
    { rank: 1, userName: "user 1", leaf: 8, seed: 0, time: "10 시간 20 분" },
    { rank: 2, userName: "user 2", leaf: 4, seed: 1, time: "09 시간 13 분" },
    { rank: 3, userName: "user 3", leaf: 2, seed: 1, time: "06 시간 54 분" },
    { rank: 4, userName: "user 4", leaf: 1, seed: 1, time: "05 시간 33 분" },
    { rank: 5, userName: "user 1", leaf: 1, seed: 0, time: "04 시간 22 분" },
    { rank: 6, userName: "user 2", leaf: 0, seed: 0, time: "02 시간 44 분" },
  ];

  return (
    <RankingContainer>
      <RankingHeader>
        <RankingTitle>랭킹</RankingTitle>
        <AddFriendButton onClick={() => setIsModalOpen(true)}>
          <img src={friendIcon} alt="친구 추가" />
        </AddFriendButton>
      </RankingHeader>

      <RankingTabs>
        <ActiveTabIndicator activeTab={activeTab} />
        <RankingTabButton
          active={activeTab === "friends"}
          onClick={() => setActiveTab("friends")}
        >
          친구
        </RankingTabButton>
        <RankingTabButton
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        >
          전체
        </RankingTabButton>
      </RankingTabs>

      <RankingListWrapper>
        {activeTab === "friends" ? (
          <FriendRanking data={friendRanking} />
        ) : (
          <AllRanking data={allRanking} />
        )}
      </RankingListWrapper>

      <TabBar />

      <RankInviteFriendsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </RankingContainer>
  );
};

export default Ranking;
