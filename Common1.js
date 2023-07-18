const $ = new Env('jd抢券');
const 间隔 = 100; //ms
const 执行次数 = 0; // 0 持续时间才生效 (测试用 1, 抢券用 0)
const 持续时间 = 10; // s
const 成功关键字 = '';

const method = `POST`;

//自行替换
let reqArr = [
    {
        "url": "https://api.m.jd.com/client.action?functionId=batchReceiveXFCoupon",
        "method": "POST",
        "headers": {
            "Connection": "keep-alive",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            "x-rp-client": "h5_1.0.0",
            "Origin": "https://pro.m.jd.com",
            "User-Agent": "jdapp;iPhone;12.0.4;;;M/5.0;appBuild/168714;jdSupportDarkMode/0;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CQS2CwY0ENO0ZNcyCNu4EWPsEJC3ZNSzDNHtYzdtCJYzZWVtDtc3CK%3D%3D%22%2C%22sv%22%3A%22CJUkDy4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1688741852%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;",
            "Cookie": "__jd_ref_cls=Babel_MapAreaExpo; mba_muid=168475618759393108670.71.1689112088553; mba_sid=71.4; shshshfpb=hb8pW3E65v9qckTCbjmvZIZVOjMkXqxvaYhDK2tl%2F%2BErPtUDL4taSwI1sd7e94IB7NdVv9vgOHH2faGTRvERgew%3D%3D; 3AB9D23F7A4B3C9B=4UJV6533EEKVIRUUVAQT6XT7BEY62ULN4KSN23KX4KRN6M37E4TVJIMGPOPJHBU4X7ZFJ5OEAPXF7ANN7NCFU6HRSE; 3AB9D23F7A4B3CSS=jdd034UJV6533EEKVIRUUVAQT6XT7BEY62ULN4KSN23KX4KRN6M37E4TVJIMGPOPJHBU4X7ZFJ5OEAPXF7ANN7NCFU6HRSEAAAAMJI3WQCWAAAAAADUQC7JKTKUFFOAX; __jda=71854095.168475618759393108670.1684756187.1688954791.1689112084.43; __jdb=71854095.2.168475618759393108670|43.1689112084; __jdc=71854095; __jdv=71854095%7Ckong%7Ct_2025363861_%7Ctuiguang%7C62424eaef2d144f8bc14e25b59389c9c%7C1688107985000; _gia_d=1; cid=8; joyytokem=babel_vqMTrMxRBRmSJwPMsQZ581jTtJZMDFkUEx6eDk5MQ==.VWZ0Q0lVYnxCTFdjegQ8DRh4SU9SBnxIBlV8elZJSGEySAZVLiQYQBQHfz9OUSZ1CxsPBA8YEgkmFjMiMh8mNxM8ITQMGT04CDFKEDxjUT0WADgvPChkOBsrExl9CRxTNXVOMSZnAh4uEmk6HTcsGH4cGSMEHgw9NjcpDUVZLjI=.3bf1b866; pre_seq=1; pre_session=0b62f4814d720989ab937d2344cc7c163eec6770|141; shshshfpa=3e6bfa0c-33b7-f78f-c8f0-5e3dfbd839a2-1684756265; shshshfpx=3e6bfa0c-33b7-f78f-c8f0-5e3dfbd839a2-1684756265; shshshsID=ffd4fb5ac977c812092097bfabf35a49_1_1689112084734; unionwsws=%7B%22devicefinger%22%3A%22eidI412e812373s1FxnFOfoWTRCc2WDbEqkLVhcZxq9ZruxbAxBdWwgjFSAhNlDbsjltRG5V3ya9rZMduhmp0R%2Fgkdi6BgR61xTyu8K%2BcTsKITi8f%2Fx3%22%7D; unpl=JF8EALpnNSttX0hRBh5WS0ZHSAhUW1hfQkRRb2JRV1kLT1wHEgpJGkJ7XlVdXxRKEB9tZhRUWFNPVg4aBisiE0peUFxaCkIQA19XXxYzNiUxZ3VsdREWVF1TQV0KSwgDbWI1V11oSmQFHAsfERdKVVdcWghPFwNoYwxQVVhDVDUaMhwSGXttZFtdCUoeAmhgAlVtWXtWBRoDGRMXSFVXbhZmSloDaG4BV1pZQ1cHHAIfEhBMWV1aVQhDFzNuVwY; joyya=1689112083.0.26.0kaf4lk; shshshfpv=JD0111d47dS8bxHsS5SE168911207707006u3UXhHISIH6mZFLsmjxQ0IjHDZGi53aT1x2KEi2trBkavB6744-oT-st6TUsppULTHNEK0pD5mZ8zASJyX_RCTEhMP3Wt8-0OrRfZ1gsAYE0sdhw8e~hb8pW3E65v9qckTCbjmvZIZVOjMkXqxvaYhDK2tl/+ErPtUDL4taSwI1sd7e94IB7NdVv9vgOHH2faGTRvERgew==; pt_key=app_openAAJkrc4MADAwy8O5ZPfrdG75FlRq4nONXAXF7CmEXxEidG0uPz4NcazuiFlPRJQ7oG2rjOsnnOw; pt_pin=jd_4eaf764f1c347; pwdt_id=jd_4eaf764f1c347; sid=43f0bd2390e58c01035cda0263abfb2w; __jdu=168475618759393108670; qid_fs=1688530388341; qid_ls=1688530388341; qid_ts=1688530388343; qid_uid=a3e5bed2-86f6-475b-b971-519c2cf422c7; qid_vis=1; abtest=20230705121302175_04; ipLoc-djd=17_1381_50718_0; b_avif=0; b_dh=896; b_dpr=2; b_dw=414; b_webp=1",
            "Referer": "https://pro.m.jd.com/mall/active/bXLjx5A1xwAsJXzevhdYUdef2t1/index.html?babelChannel=ttt7&tttparams=jEmIiXieyJncHNfYXJlYSI6IjE5XzE2MDFfNTAyNTZfNTA0MTciLCJwcnN0YXRlIjoiMCIsInVuX2FyZWEiOiIxOV8xNjAxXzUwMjU2XzUwNDE3IiwiZExhdCI6IiIsImdMYXQiOiIyMy40MzI2OCIsImdMbmciOiIxMTMuMzA0MzIiLCJsbmciOiIxMTMuMzA0NzI2IiwibGF0IjoiMjMuNDMyMzM3IiwiZExuZyI6IiIsIm1vZGVsIjoiaVBob25lMTQsMi7J9",
            "Host": "api.m.jd.com",
            "x-referer-page": "https://pro.m.jd.com/mall/active/bXLjx5A1xwAsJXzevhdYUdef2t1/index.html",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Accept": "*/*",
            "Content-Length": "5555"
        },
        "body": "body=%7B%22activityId%22%3A%22vqMTrMxRBRmSJwPMsQZ581jTtJZ%22%2C%22gridInfo%22%3A%22%22%2C%22scene%22%3A%221%22%2C%22args%22%3A%22key%3DBE70D870E55595F15A8A8D88B0BA1F85ACF927FAEEBF33AAF11B30A8282435CAD9381D22D8CA15283D8661621AD24FF5_bingo%2CroleId%3DE5244E0D27B23579EF0630083D9009D3D9DC0AA76B5030E7C00CD1FA60F07A326FA54674CD25513E2D0517E15FCC5289611104C476671BE7AE9042AD2B3DA761057B11128F2EF0244F1D906E664B4A52D434F1976F66179E7F9D12780ECBF57583D8038BFCAB2A205D533125A1701A6665988948C52C131235567072AAE2B12A098B8C90145F23104B9054A57F8CF2C0F0FF8C8FD01DD88CF52E38E4A3122D70C09EEDDC9102CE0CF1AB962B37B76CE8_bingo%2CstrengthenKey%3D6B76BE079656C1F6335E739B9DDA5DA51E9D6F29980C91721908CB586483E3AFD24A2F6AB62113D3CC28BDF5D3517BAF_bingo%22%2C%22qryArgs%22%3A%22key%3DB85590A6C4EF5FD71CE76C368AC4E68FC1F74609118A4E03691D7F652A83ACE72AF9DF941051C2BA143419B657F652B3_bingo%2CroleId%3DE5244E0D27B23579EF0630083D9009D320A2D3DBD6ED2AA2B0CBB5379750DDA4D9A92A1057D75682A5F6BDBAD3560B12DAC4974BBA483678A23CD5DE6B2A53C4EC54E1C1D1AC41CCDDCBA2F6D89A8B764E729AC5015C093CBB0477E418CF4BB5E33A390B74447C5FF688193F18F9578E2064E17D0E481AF63081C557BED73065A09633F4628CC2EF432F68E475CA0C73E338778D4F15E46DECEFD54FDF8D818EF48A9F9F7AE8D264B570AAF7D8868F74_bingo%2CstrengthenKey%3D6B76BE079656C1F6335E739B9DDA5DA51E9D6F29980C91721908CB586483E3AF09728F3D2FF1A896CDA5AF8FA8954C85_bingo%3Bkey%3DAD3D64C81815A0D4D1DAB1796638CAF3F9788682BCFE09D81BA4CC4B6443AF8F3E365D801AFA84ADB81F5903946F0E1E_bingo%2CroleId%3DE5244E0D27B23579EF0630083D9009D30763B5E5C3F6215ABF14B647E6FDC68D6662CD2A0B4F414CF5B5F8034B7FA7BBB993394A8ED1B3B5E8FC848F294A27C164826C2416A4ACF59116B4A70CF8B6EB2A1E3666351F18479170462632C3759C3E3C82D8961058385A4E0926F0F1F69C3B05D67E16EABC226A49C7D68AAC469D3A3F07EAFA86B152F9C6DA6E82886B355901AFDE1B5889072D4887D3F561C6FD5186B431EAC702D749CEC19EE1C1D5D2_bingo%2CstrengthenKey%3D6B76BE079656C1F6335E739B9DDA5DA51E9D6F29980C91721908CB586483E3AF1C149C245071456F6948B008C19C492B_bingo%22%2C%22platform%22%3A%221%22%2C%22orgType%22%3A%222%22%2C%22openId%22%3A%22-1%22%2C%22pageClickKey%22%3A%22-1%22%2C%22eid%22%3A%224UJV6533EEKVIRUUVAQT6XT7BEY62ULN4KSN23KX4KRN6M37E4TVJIMGPOPJHBU4X7ZFJ5OEAPXF7ANN7NCFU6HRSE%22%2C%22fp%22%3A%22fbb99b30c16ea8b98d8c7c2c428b8d39%22%2C%22shshshfp%22%3A%22259eb805101e1ab601c35c44503dcf06%22%2C%22shshshfpa%22%3A%223e6bfa0c-33b7-f78f-c8f0-5e3dfbd839a2-1684756265%22%2C%22shshshfpb%22%3A%22hb8pW3E65v9qckTCbjmvZIZVOjMkXqxvaYhDK2tl%2F%2BErPtUDL4taSwI1sd7e94IB7NdVv9vgOHH2faGTRvERgew%3D%3D%22%2C%22childActivityUrl%22%3A%22https%253A%252F%252Fpro.m.jd.com%252Fmall%252Factive%252FvqMTrMxRBRmSJwPMsQZ581jTtJZ%252Findex.html%253Ftttparams%253DwJzin1MeyJnTGF0IjoiMzAuMzg5MjE5IiwidW5fYXJlYSI6IjE3XzEzODFfNTA3MTNfNTM3NTUiLCJkTGF0IjoiIiwicHJzdGF0ZSI6IjAiLCJhZGRyZXNzSWQiOiIyODg2ODc4MDg3IiwibGF0IjoiMzAuMzg4ODg4IiwicG9zTGF0IjoiMzAuMzg5MjE5IiwicG9zTG5nIjoiMTE0LjM3MzE3NyIsImdwc19hcmVhIjoiMTdfMTM4MV81MDcxM181Mzc1NSIsImxuZyI6IjExNC4zNzMyNTAiLCJ1ZW1wcyI6IjAtMC0yIiwiZ0xuZyI6IjExNC4zNzMxNzciLCJtb2RlbCI6ImlQaG9uZTEyLDEiLCJkTG5nIjoiIn70%25253D%2526babelChannel%253Dttt2%2526jumpFrom%253D1%22%2C%22userArea%22%3A%22-1%22%2C%22client%22%3A%22%22%2C%22clientVersion%22%3A%22%22%2C%22uuid%22%3A%22%22%2C%22osVersion%22%3A%22%22%2C%22brand%22%3A%22%22%2C%22model%22%3A%22%22%2C%22networkType%22%3A%22%22%2C%22jda%22%3A%22-1%22%2C%22pageClick%22%3A%22Babel_Coupon%22%2C%22headArea%22%3A%220ae7180a4213f967957d89a631ded72e5ab13bdd941466b35d19436283fefbfc%22%2C%22floor_id%22%3A%2295619858%22%2C%22siteClient%22%3A%22apple%22%2C%22mitemAddrId%22%3A%22%22%2C%22geo%22%3A%7B%22lng%22%3A%22114.373250%22%2C%22lat%22%3A%2230.388888%22%7D%2C%22addressId%22%3A%22%22%2C%22posLng%22%3A%22114.373177%22%2C%22posLat%22%3A%2230.389219%22%2C%22un_area%22%3A%2217_1381_50713_53755%22%2C%22gps_area%22%3A%2217_1381_50713_53755%22%2C%22homeLng%22%3A%22114.373177%22%2C%22homeLat%22%3A%2230.389219%22%2C%22homeCityLng%22%3A%22%22%2C%22homeCityLat%22%3A%22%22%2C%22focus%22%3A%22%22%2C%22innerAnchor%22%3A%22%22%2C%22cv%22%3A%222.0%22%2C%22log%22%3A%221688741857871~1Is8p52xGCJMDFzWWhBWjk5MQ%3D%3D.Qm9QeW1HaFB0bkZrUD8eFGlbdGgqGFsbJEJ1Xm1rX2gWcyRCJwAjYgMOWwRsRi9RMDkYDSsjMB4vMggAJRYCDDErKBA3OyoxLApoBzVHah8BCRwUHj9tHCAJBBBZMj5EPFF1EzFuJiUMBWAeJhU7EVonOzQNOjcfIT4NNmdOJxY%3D.0608975c~1%2C1~3992DABA54FEF77021AEDB7A665A7954724E697F~0p9mchx~C~TRpAXRAPbWUYEkZbWxoOaxBRBxV1ch4DehRxHEcZQhoYElYAG3kDHAR4GgoFHFMZQhoYElYCG3kDHAR4Gg0GHFMZQhppHBBSRFYWCgEZFEtHEggXBw4MCAUBBwABBwQDAQoDCAsXGhpDVVYXDBpAREZBQkxSVhAZFE9RURAPFF5SREZBQk1VEh4XRlxaEghuBQsYAQABGgoGHAoZBxQBbR4XXFIWCgEZFFtHEggXBgFXBwFQDglVUlYFAg0BVAZTBAhVUlFWDg0DCFYDDggWHBBbRhoOEltlXldaVRAZFEwWCgMDDgADBAMNAw8MBwMZFFJfEggXBloCAlQBDgkAVAUHBgEMCVNXDwsDVAAGAgxXUwVWBw4HVVdWAA8DABAZFF5EUhAPFFBWCEJiBX0CBUQMR1tfZHFXXFVCantvYHdefVltR0BCUWtdcnMGRF4aHX1GYEZgcnQARFNmQXEFQ1YCUwEAeXACeFxiRgtDUXd8eABTV39gYkRwZF9RRw8IFBQWXkQXDBp1QEJZUxh3X19FQ0xRQh4Vf1ZXHhAZFFZVRhAPFAkCCAUEAhoYEkFWRBoOawoMABQAAQZoGhpGXxAPbRpdYFpaWF0FAh4EFBQWWX1mFBQWAQcbARYFEh4XBwoaABwBFBQWAQQNAQkAEh4XBloCAlQBDgkAVAUHBgEMCVNXDwsDVAAGAgxXUwVWBw4HVVdWAA8DABAZFFkWbR4XX1dVEggXUF5SVlRTQkwWHBBUXBoOEkcXGhpXWRAPFE8HHgcbBBoYElFTaU4WChAMDxoYElBRFAIWQlNbUldZDWt2RXpSAFh2FBQWXVgXDGMFHAIZBmUYElBZWV8WChAEAAAMBwYEDg0HBwYESAlGRkpkbnRWVFBje3x%2BdmNiB3pXSnNMeHkJDRxRflxiVWdnBF1yWAFnfglNZnYMd353R31WZGoEfWZabHxgfkZzBAluUWp0YlxDAQJlQW1eY0hgYWBTYnRWclxhfXB0Q35nBFhyZV8HfkVSRn1DBHpxdF9QfXBgBX1cR0J%2BZ0h2fWEEdVleaQFwZFNhfkVZB39ncVV4UVBXfVpRT3JyYgN6UVwGeUtgWnUHV1B%2FXE96c2QNWH1TeWRlTFsGdktsf3ZfBQZlTnUJHgUBB1kCCQcFSEIYAUxLSHpKZEpzbm9maXlzcFdyY3NgV39mdmVkZwBiaEpWb34FXHFzUXVjdWBSZWl2eX9yQW5mcQMFbnBMU3NgBFB1dkUBbnp1cWVzZGJ2dlVaYX1cX1BtTmlicVpWcn9ifXR3QWFsd3BRYH11BFBzXQwJTgMAVA5fX0sXGhpZQ1UXDBoWTQ%3D%3D~13v1i6h%22%2C%22random%22%3A%22YCsBf0jC%22%7D&screen=828*1608&client=wh5&clientVersion=1.0.0&sid=1337416d2d0dd558f035c023520aea0w&uuid=&area=17_1381_50713_53755&uemps=0-0-2&appid=babelh5&ext=%7B%22prstate%22%3A%220%22%7D&functionId=batchReceiveXFCoupon&h5st=20230707225737901%3B4555287761430980%3B35fa0%3Btk02wd6e51c5b41lMisxKzErMisxibVutyiiA2W4XNQbcQEB4FRdX_Xl2jsYzJVR5yS0FC6jI5AGy12KuXKb6Ok8gPla%3B6e75dc87106d016d3182c532141a347ed2bb150873425d55908a6bcaadc8fd41%3B3.1%3B1688741857901%3B7414c4e56278580a133b60b72a30beb2764d2e61c66a5620e8e838e06644d1bf598a4bf3b2554d4f13c5a26f9edc11af4685627a9cb972e9f9a17a553dda4278204881c5a38da86393d338218624d77730f94405317dee69b2067101f61cd3af613ed32e2796cf4ad8efa1f22cabecf88cdd238ba8e1aa7d403f474814f388fbdc3daf2eebcbebbb7b6e1e229ba73506b786f6b219342f23442dbeba7b9585e86732bc08a02d4ef6b05b7667310c768a&eid=4UJV6533EEKVIRUUVAQT6XT7BEY62ULN4KSN23KX4KRN6M37E4TVJIMGPOPJHBU4X7ZFJ5OEAPXF7ANN7NCFU6HRSE&x-api-eid-token=jdd034UJV6533EEKVIRUUVAQT6XT7BEY62ULN4KSN23KX4KRN6M37E4TVJIMGPOPJHBU4X7ZFJ5OEAPXF7ANN7NCFU6HRSEAAAAMJGC4QTAQAAAAAD27OXAUWNHH3HYX"
    }
];

// reqArr = [reqArr[5]];

$.exchangeEnd = [];

// let idk = 120;
const ids = [];

!(async () => {
    // let taskId = setInterval(() => Promise.all(ids.map(分发id)), 间隔);
    let taskId = setInterval(() => Promise.all(reqArr.map(抢券)), 间隔);

    if (执行次数 > 0) {
        await $.wait(执行次数 * 间隔);
        clearInterval(taskId);
        await $.wait(执行次数 * 1000 + 300 - 执行次数 * 间隔); // qx保活
    } else {
        await $.wait(持续时间 * 1000);
        clearInterval(taskId);
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());

function 分发id(id) {
    const _infos = bodyArr.map((headers, i) => {
        return {
            url,
            headers: headers,
            index: i,
            productInfo: id,
        };
    });
    Promise.all(_infos.map(抢券));
}

function 抢券(info, index) {
    return new Promise((resolve) => {
        // let _body = JSON.parse(body);

        // _body.productInfos = [info.productInfo];
        // _body.memberId = info.headers.memberId;

        // _body = JSON.stringify(_body);

        const opts = {
            method,
            ...info,
        };

        // if ($.exchangeEnd.includes(info.Cookie)) {
        //   resolve(0);
        //   return;
        // }

        $.post(opts, (err, resp, data) => {
            data = JSON.parse(data);
            console.log($.toStr(data));
            // if (data.state === 'ok') $.exchangeEnd.push(info.Cookie);
            // const _data = JSON.parse(data);
            // console.log(
            //   `${info.index} => [${resp.statusCode}]@[${info.productInfo.batchNo}] `
            // );
            // console.log(
            //   `${index} => [${resp.statusCode}] ${
            //     data.state === 'ok'?.msg ? '🟢' : '🟡'
            //   }`
            // );
            console.log(`-=-=-=-=-=-=-=-=-=-=-`);
            resolve(resp);
        });
    });
}

// https://github.com/chavyleung/scripts/blob/master/Env.js
// prettier-ignore
function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env;
        }

        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {url: opts} : opts;
            let sender = this.get;
            if (method === 'POST') {
                sender = this.post;
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err);
                    else resolve(resp);
                });
            });
        }

        get(opts) {
            return this.send.call(this.env, opts);
        }

        post(opts) {
            return this.send.call(this.env, opts, 'POST');
        }
    }

    return new (class {
        constructor(name, opts = {}) {
            this.name = name;
            this.http = new Http(this);
            this.data = null;
            this.dataFile = 'box.dat';
            this.logs = [];
            this.isMute = false;
            this.noLogKey = opts.noLogKey || '';
            this.noLog = opts.noLog;
            this.isNeedRewrite = false;
            this.logSeparator = '\n';
            this.startTime = new Date().getTime();
            Object.assign(this, opts);
            this.log('', `🔔${this.name}, 开始!`);
        }

        isNode() {
            return 'undefined' !== typeof module && !!module.exports;
        }

        isQuanX() {
            return 'undefined' !== typeof $task;
        }

        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon;
        }

        isLoon() {
            return 'undefined' !== typeof $loon;
        }

        isShadowrocket() {
            return 'undefined' !== typeof $rocket;
        }

        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str);
            } catch {
                return defaultValue;
            }
        }

        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj);
            } catch {
                return defaultValue;
            }
        }

        getJson(key, defaultValue) {
            let json = defaultValue;
            const val = this.getData(key);
            if (val) {
                try {
                    json = JSON.parse(this.getData(key));
                } catch {
                }
            }
            return json;
        }

        setJson(val, key) {
            try {
                return this.setData(JSON.stringify(val), key);
            } catch {
                return false;
            }
        }

        getScript(url) {
            return new Promise((resolve) => {
                this.get({url}, (err, resp, body) => resolve(body));
            });
        }

        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpApi = this.getData('@chavy_boxjs_userCfgs.httpApi');
                httpApi = httpApi ? httpApi.replace(/\n/g, '').trim() : httpApi;
                let httpApi_timeout = this.getData(
                    '@chavy_boxjs_userCfgs.httpApi_timeout'
                );
                httpApi_timeout = httpApi_timeout ? httpApi_timeout * 1 : 20;
                httpApi_timeout =
                    runOpts && runOpts.timeout ? runOpts.timeout : httpApi_timeout;
                const [key, addr] = httpApi.split('@');
                const opts = {
                    url: `http://${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpApi_timeout,
                    },
                    headers: {'X-Key': key, Accept: '*/*'},
                };
                this.post(opts, (err, resp, body) => resolve(body));
            }).catch((e) => this.logErr(e));
        }

        loadData() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs');
                this.path = this.path ? this.path : require('path');
                const curDirDataFilePath = this.path.resolve(this.dataFile);
                const rootDirDataFilePath = this.path.resolve(
                    process.cwd(),
                    this.dataFile
                );
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
                const isRootDirDataFile =
                    !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile
                        ? curDirDataFilePath
                        : rootDirDataFilePath;
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath));
                    } catch (e) {
                        return {};
                    }
                } else return {};
            } else return {};
        }

        writeData() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs');
                this.path = this.path ? this.path : require('path');
                const curDirDataFilePath = this.path.resolve(this.dataFile);
                const rootDirDataFilePath = this.path.resolve(
                    process.cwd(),
                    this.dataFile
                );
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath);
                const isRootDirDataFile =
                    !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath);
                const jsonData = JSON.stringify(this.data);
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsonData);
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsonData);
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsonData);
                }
            }
        }

        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
            let result = source;
            for (const p of paths) {
                result = Object(result)[p];
                if (result === undefined) {
                    return defaultValue;
                }
            }
            return result;
        }

        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj;
            if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
            path
                .slice(0, -1)
                .reduce(
                    (a, c, i) =>
                        Object(a[c]) === a[c]
                            ? a[c]
                            : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
                    obj
                )[path[path.length - 1]] = value;
            return obj;
        }

        getData(key) {
            let val = this.getVal(key);
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objKey, paths] = /^@(.*?)\.(.*?)$/.exec(key);
                const objVal = objKey ? this.getVal(objKey) : '';
                if (objVal) {
                    try {
                        const objedVal = JSON.parse(objVal);
                        val = objedVal ? this.lodash_get(objedVal, paths, '') : val;
                    } catch (e) {
                        val = '';
                    }
                }
            }
            return val;
        }

        setData(val, key) {
            let isSuc = false;
            if (/^@/.test(key)) {
                const [, objKey, paths] = /^@(.*?)\.(.*?)$/.exec(key);
                const objdat = this.getVal(objKey);
                const objVal = objKey
                    ? objdat === 'null'
                        ? null
                        : objdat || '{}'
                    : '{}';
                try {
                    const objedVal = JSON.parse(objVal);
                    this.lodash_set(objedVal, paths, val);
                    isSuc = this.setVal(JSON.stringify(objedVal), objKey);
                } catch (e) {
                    const objedVal = {};
                    this.lodash_set(objedVal, paths, val);
                    isSuc = this.setVal(JSON.stringify(objedVal), objKey);
                }
            } else {
                isSuc = this.setVal(val, key);
            }
            return isSuc;
        }

        getVal(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key);
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key);
            } else if (this.isNode()) {
                this.data = this.loadData();
                return this.data[key];
            } else {
                return (this.data && this.data[key]) || null;
            }
        }

        setVal(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key);
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key);
            } else if (this.isNode()) {
                this.data = this.loadData();
                this.data[key] = val;
                this.writeData();
                return true;
            } else {
                return (this.data && this.data[key]) || null;
            }
        }

        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got');
            this.ckTough = this.ckTough ? this.ckTough : require('tough-cookie');
            this.ckJar = this.ckJar ? this.ckJar : new this.ckTough.CookieJar();
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {};
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckJar;
                }
            }
        }

        get(opts, callback = () => {
        }) {
            if (opts.headers) {
                delete opts.headers['Content-Type'];
                delete opts.headers['Content-Length'];
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {};
                    Object.assign(opts.headers, {'X-Surge-Skip-Scripting': false});
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body;
                        resp.statusCode = resp.status;
                    }
                    callback(err, resp, body);
                });
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {};
                    Object.assign(opts.opts, {hints: false});
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {statusCode: status, statusCode, headers, body} = resp;
                        callback(null, {status, statusCode, headers, body}, body);
                    },
                    (err) => callback(err)
                );
            } else if (this.isNode()) {
                this.initGotEnv(opts);
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie']
                                    .map(this.ckTough.Cookie.parse)
                                    .toString();
                                if (ck) {
                                    this.ckJar.setCookieSync(ck, null);
                                }
                                nextOpts.cookieJar = this.ckJar;
                            }
                        } catch (e) {
                            this.logErr(e);
                        }
                        // this.ckJar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {statusCode: status, statusCode, headers, body} = resp;
                            callback(null, {status, statusCode, headers, body}, body);
                        },
                        (err) => {
                            const {message: error, response: resp} = err;
                            callback(error, resp, resp && resp.body);
                        }
                    );
            }
        }

        post(opts, callback = () => {
        }) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post';
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            // if (opts.body && // opts.headers && !opts.headers['Content-Type']) {
            // opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            //  }
            if (opts.headers) delete opts.headers['Content-Length'];
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {};
                    Object.assign(opts.headers, {'X-Surge-Skip-Scripting': false});
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body;
                        resp.statusCode = resp.status;
                    }
                    callback(err, resp, body);
                });
            } else if (this.isQuanX()) {
                opts.method = method;
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {};
                    Object.assign(opts.opts, {hints: false});
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {statusCode: status, statusCode, headers, body} = resp;
                        callback(null, {status, statusCode, headers, body}, body);
                    },
                    (err) => callback(err)
                );
            } else if (this.isNode()) {
                this.initGotEnv(opts);
                const {url, ..._opts} = opts;
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {statusCode: status, statusCode, headers, body} = resp;
                        callback(null, {status, statusCode, headers, body}, body);
                    },
                    (err) => {
                        const {message: error, response: resp} = err;
                        callback(error, resp, resp && resp.body);
                    }
                );
            }
        }

        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date();
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                S: date.getMilliseconds(),
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(
                    RegExp.$1,
                    (date.getFullYear() + '').substr(4 - RegExp.$1.length)
                );
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(
                        RegExp.$1,
                        RegExp.$1.length == 1
                            ? o[k]
                            : ('00' + o[k]).substr(('' + o[k]).length)
                    );
            return fmt;
        }

        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawOpts) => {
                if (!rawOpts) return rawOpts;
                if (typeof rawOpts === 'string') {
                    if (this.isLoon()) return rawOpts;
                    else if (this.isQuanX()) return {'open-url': rawOpts};
                    else if (this.isSurge()) return {url: rawOpts};
                    else return undefined;
                } else if (typeof rawOpts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawOpts.openUrl || rawOpts.url || rawOpts['open-url'];
                        let mediaUrl = rawOpts.mediaUrl || rawOpts['media-url'];
                        return {openUrl, mediaUrl};
                    } else if (this.isQuanX()) {
                        let openUrl = rawOpts['open-url'] || rawOpts.url || rawOpts.openUrl;
                        let mediaUrl = rawOpts['media-url'] || rawOpts.mediaUrl;
                        let updatePasteboard =
                            rawOpts['update-pasteboard'] || rawOpts.updatePasteboard;
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl,
                            'update-pasteboard': updatePasteboard,
                        };
                    } else if (this.isSurge()) {
                        let openUrl = rawOpts.url || rawOpts.openUrl || rawOpts['open-url'];
                        return {url: openUrl};
                    }
                } else {
                    return undefined;
                }
            };
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts));
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts));
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣=============='];
                logs.push(title);
                subt ? logs.push(subt) : '';
                desc ? logs.push(desc) : '';
                console.log(logs.join('\n'));
                this.logs = this.logs.concat(logs);
            }
        }

        log(...logs) {
            if (this.noLog || (this.noLogKey && (this.getData(this.noLogKey) || 'N').toLocaleUpperCase() === 'Y')) {
                return;
            }
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs];
            }
            console.log(logs.join(this.logSeparator));
        }

        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            if (!isPrintSack) {
                this.log('', `❗️${this.name}, 错误!`, err);
            } else {
                this.log('', `❗️${this.name}, 错误!`, err.stack);
            }
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }

        done(val = {}) {
            const endTime = new Date().getTime();
            const costTime = (endTime - this.startTime) / 1000;
            this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`);
            this.log();
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val);
            }
        }
    })(name, opts);
}
