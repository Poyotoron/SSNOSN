'use client'

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "xp.css/dist/XP.css";
import 'react-tabs/style/react-tabs.css';

import HPRate from "./hprate";
import Gravity from "./gravity";

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
              <Tab>割合ダメージ耐久チェッカー</Tab>
              <Tab>Coming soon...</Tab>
              <Tab>このサイトについて</Tab>
            </TabList>

            <TabPanel>
              <HPRate />
            </TabPanel>
            <TabPanel>
              <Gravity />
            </TabPanel>
            <TabPanel>
              <p>工事中…</p>
            </TabPanel>
            <TabPanel>
              <p><a href="https://github.com/Poyotoron/SSNOSN">GitHub</a></p>
              <p><a href="https://twitter.com/PyTr_N">作者Twitter</a></p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
