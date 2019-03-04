import sys
import random
import time

import requests
from fake_useragent import UserAgent
from pyquery import PyQuery as pq

agent = UserAgent()
# whichOne = 0  # 取值范围 0 1 2 3 4
Netlist = [
    "xingganmeinvxiezhen/list_1_",    # 性感
    "meituisiwatupian/list_2_",       # 美腿
    "qingchunmeinvxiezhen/list_4_",   # 写真
    "BEAUTYLEGtuimo/list_6_",
    "ligui/list_32_",
]
standercomLen = [30, 21, 35, 36]  # 顺序同上 长按照16 年定
maxPages = [30, 14, 32, 34]


def imageSaver(imageUrl):
    doc = pq(imageUrl, encoding="gbk", headers={'user-agent': agent.random})
    name = doc('.wzbt').text()  # 抓取名字
    pic = doc('.nry img').items()
    i = 0
    for src in pic:  # 抓取并存图片
        imageSrc = src.attr('src')
        img = requests.get(imageSrc, headers={'user-agent': agent.random})
        i += 1
        print("正在抓取 " + name + " 的第" + str(i) + "张照片")
        f = open(name + str(i) + '.jpg', 'ab')
        f.write(img.content)
        f.close()
    return name


def juge(arg):
    if (len(commander) == standercomLen[whichOne]):
        return -9
    else:
        return -10


try:
    #
    # ────────────────────────────────────────────────────────────────────────── I ──────────
    #   :::::: F O R M A T T A B L E  O U T P U T : :  :   :    :     :        :          :
    # ────────────────────────────────────────────────────────────────────────────────────
    #
    sentence = "0->性感 1->丝袜 2->写真 3->美腿 4->丽柜"
    secreen_width = 150
    text_width = len(sentence)+10
    box_width = text_width+6
    print()
    print(' '+'+'+'-'*(box_width-2) + '+')
    print(' '+'| '+' '*text_width + '   |')
    print(' '+'|  ' + sentence + '  |')
    print(' '+'| '+' '*text_width + '   |')
    print(' '+'+'+'-'*(box_width-2) + '+')

    # whichOne = int(input("输入一个数字（0~4）: "))
    whichOne = 1
    for num in range(maxPages[whichOne]):
        mainEntry = "http://www.tu11.com/" + \
            Netlist[whichOne] + str(num+1)+".html"
        print(mainEntry)
        num += 1
        doc = pq(mainEntry, headers={'user-agent': agent.random})
        shuipics = doc('.textbox2 .biaoti').items()
        remainCounter = 0
        for paraHref in shuipics:
            commander = paraHref.attr('href')
            Avatar = "http://www.tu11.com" + commander
            print("当前所在角色：" + commander)
            imageSaver(Avatar)  # 爬第一页 没有规律的那个
            ran1 = random.randint(1, 2)
            time.sleep(ran1)
            getindex = pq(Avatar, encoding="gbk", headers={
                'user-agent': agent.random
            })
            remainCounter += 1
            pages = getindex('.dede_pages .nryfy a').items()
            for page in pages:  # 在检索中获取下标 13383_2.html 这里抛弃第一页 没有规律
                part = page.attr('href')
                jury = juge(commander)  # FIXME: 怎么用re匹配位置 而不是写死的
                url = Avatar[0:jury] + str(part)
                print("\n角色的各个并列站点：" + url)
                imageSaver(url)
                name = imageSaver(url)
            print("\n" + name[0:-3] + "的照片抓取完成\n")
            print("当前页面剩余：" + str(25 - remainCounter) + "个待获取\n")
        print("\n==================第" + str(maxPages[whichOne] - num) +
              "页照片抓取工作完成==================\n")
    print("主站域名下" + str(maxPages[whichOne]) + "个相关网址抓取结束\n")
except:
    print("服务器拒绝你的猖狂行为，此时所在位置"+str(num))
