'use client'

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "xp.css/dist/XP.css";
import 'react-tabs/style/react-tabs.css';

import HPRate from "./hprate";

export default function Home() {
  return (
    <main>
      <div style={{ width: 400 }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">SSNOSN</div>
        </div>

        <div className="window-body">
          {/* XP.cssのタブが上手く動かないのでreact-tabsで代用 */}
          <Tabs>
            <TabList>
              <Tab>実質HP倍率計算</Tab>
              <Tab>Coming soon...</Tab>
            </TabList>

            <TabPanel>
              <HPRate />
            </TabPanel>
            <TabPanel>
              <p>実装予定の機能</p>
              <ul style={{ listStyleType: "disc" }}>
                <li>実質HP計算</li>
                <li>ダメージ耐久チェッカー</li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
