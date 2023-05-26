import React from "react";
import momentJ from "moment-jalaali";
// import { GiCancel, GiConfirmed } from 'react-icons/gi'
// import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
// import { FcProcess } from 'react-icons/fc'
// import { MdPayment } from 'react-icons/md'
// import { GrDeliver, GrStatusUnknown } from 'react-icons/gr'
export default {
  // * -------------------------------------------------------> production
  api_url: "https://newapi.farhangosiasat.com/api/",
  public_url: "https://newapi.farhangosiasat.com/",
  site_url: "https://farhangosiasat.com/",
  cms_url: "https://farhangosiasat.com/cms/",

  socket_conn_admin: "https://newapi.farhangosiasat.com/admins",
  socket_conn_guest: "https://newapi.farhangosiasat.com/users",

  guest_prefactor_pdf_download_uri:
    "https://newapi.farhangosiasat.com/api/guest/order/invoice/informal?code=",
  customer_factor_pdf_download_uri:
    "https://newapi.farhangosiasat.com/api/customer/order/invoice/formal?code=",
  seller_factor_pdf_download_uri:
    "https://newapi.farhangosiasat.com/api/seller/order/invoice/formal?code=",
  admin_orderReport_excel_download_uri:
    "https://newapi.farhangosiasat.com/api/admin/financial/order/excel",

  // * ------------------------------------------------------->

  // صفحه انتخاب شیوه پرداخت
  pay_way: "payment/way?pay_code=",

  // version -> https://en.wikipedia.org/wiki/Software_versioning
  versionFa: "0.10.0",

  outTime: 6000000,
  refreshTime: 60000,

  userTypeParser: {
    customer: " مشتری",
    seller: " فروشنده",
    admin: "ادمین",
    auditor: "ناظر مالی",
    supporter: "پشتیبان",
    marketer: "بازاریاب",
    seo: "کارشناس سئو",
  },

  // eslint-disable-next-line react/display-name
  fallBackRender: (sms = "در حال بارگذاری ...") => (
    <p
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        // background: '#013222e6',
        display: "grid",
        alignContent: "center",
        padding: "50px 0 50px 0",
        fontSize: "32px",
        fontWeight: "bold",
        margin: 0,
      }}
    >
      {sms}
    </p>
  ),

  payment_type: {
    null: "هزینه سفارش",
    order: "هزینه سفارش",
    wallet_withdrawal: "واریز به کیف پول",
    wallet_checkout: "تسویه با کیف پول",
  },

  userStatusParser: {
    0: "غیرفعال",
    1: "فعال",
    2: "حذف شده",
    3: "محدود شده",
  },

  shopBranchStatusParser: {
    "-3": "مسدود شده ،با پشتیبانی تماس بگیرید",
    "-2": "ارسال درخواست فعال سازی",
    "-1": "منتظر تایید",
    0: "غیرفعال موقت ،با پشتیبانی تماس بگیرید",
    1: "فعال",
    2: "پاک شده",
  },

  orderStatusParser: (status) =>
    status === -8
      ? {
          title: "لغو شده(8-)",
          icon: "لغو شده",
          hint: "لغو شده از سمت خریدار",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === -6
      ? {
          title: "لغو شده(6-)",
          icon: "لغو شده",
          hint: "لغو شده از سمت خریدار",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === -4
      ? {
          title: "لغو شده(4-)",
          icon: "لغو شده",
          hint: "لغو شده از سمت فروشنده",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === -2
      ? {
          title: "لغو شده(2-)",
          icon: "لغو شده",
          hint: "لغو شده از سمت فروشنده",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 0
      ? {
          title: "در حال بررسی(0)",
          icon: "در حال بررسی",
          hint: "فروشنده در حال بررسی سفارش شما است",
          customer: true,
          seller: false,
          admin: true,
        }
      : status === 2
      ? {
          title: "منتظر پذیرش (2)",
          icon: "موافقت مشتری",
          hint: "ریال سفارش ممکن است تغییر کرده باشد و مشتری باید پس بررسی آن ،موافقت خود را اعلام کند",
          customer: false,
          seller: true,
          admin: true,
        }
      : status === 4
      ? {
          title: "رد پذیرش (4)",
          icon: "مخالفت مشتری",
          hint: "مشتری نسبت به تغییر هزینه سفارش ،معترض است",
          customer: true,
          seller: false,
          admin: true,
        }
      : status === 6
      ? {
          title: "منتظر پرداخت (6)",
          icon: "پرداخت",
          hint: "روی دکمه پرداخت، کلیک کنید.",
          customer: false,
          seller: true,
          admin: true,
        }
      : status === 8
      ? {
          title: "در دست اقدام (8)",
          icon: "در دست اقدام",
          hint: "پرداخت موفقیت آمیز بوده و سفارش بزودی ارسال می شود",
          customer: true,
          seller: false,
          admin: true,
        }
      : status === 10
      ? {
          title: "ارسال شده (10)",
          icon: "ارسال شده",
          hint: "سفارش شما با موفقیت ارسال شده و بزودی در آدرس اعلامی تحویل داده خواهد شد",
          customer: true,
          seller: false,
          admin: true,
        }
      : status === 12
      ? {
          title: "تکمیل شده(12)",
          icon: "تکمیل شده",
          hint: "سفارش با موفقیت تحویل مشتری گردید",
          customer: true,
          seller: false,
          admin: true,
        }
      : status === 14
      ? {
          title: "درخواست مرجوع (14)",
          icon: "درخواست مرجوعی",
          hint: "مشتری تقاضایی مبنی بر مرجوع سفارش دارد",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 16
      ? {
          title: "بررسی صدور فاکتور (16)",
          icon: "بررسی صدور فاکتور",
          hint: "فروشنده در حال بررسی شرایط ،جهت صدور فاکتور می باشد",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 18
      ? {
          title: "لغو فاکتور (18)",
          icon: "لغو فاکتور",
          hint: "فروشنده درخواست شما رد نمود ،دوباره درخواست می دهید",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 20
      ? {
          title: "فاکتور صادر شد (20)",
          icon: "فاکتور صادر شد",
          hint: "فاکتور صادر شد",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 22
      ? {
          title: "سفارش مرجوع شده (22)",
          icon: "پشتیبانی با تقاضا مرجوعی سفارش را پذیرفته است",
          hint: "پشتیبانی با تقاضا مرجوعی سفارش را پذیرفته است",
          customer: true,
          seller: true,
          admin: true,
        }
      : status === 30
      ? {
          title: "خاتمه سفارش (30)",
          icon: "سفارش خاتمه یافته است",
          hint: "سفارش خاتمه یافته است",
          customer: true,
          seller: true,
          admin: true,
        }
      : {
          title: "نامشخص",
          icon: "وضعیت مشخص نیست",
          hint: "وضعیت مشخص نیست، با پشتیبانی هماهنگ کنید.",
          customer: true,
          seller: true,
          admin: true,
        },

  payStatusParser: (status) =>
    status === 0
      ? {
          title: "منتظر پرداخت",
        }
      : status === 1
      ? {
          title: "کنسل شده",
        }
      : status === 2
      ? {
          title: "پرداخت شده",
        }
      : status === 4
      ? {
          title: "تسویه شده",
        }
      : {
          title: "نامشخص",
        },

  random_color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),

  log: (data, space = 2) =>
    console.log({ [data]: JSON.stringify(data, null, space) }),

  toEnglishDigits: (input) => {
    const arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ];
    const persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ];
    let forceEnNum = input.toString();
    for (let i = 0; i < 10; i += 1)
      forceEnNum = forceEnNum
        .replace(persianNumbers[i], i)
        .replace(arabicNumbers[i], i);
    return forceEnNum;
  },

  toPersianDigits: (data = "0") => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return data.toString().replace(/\d/g, (x) => farsiDigits[x]);
  },

  toEnglishDigits_v2: (data = "۰") =>
    data !== undefined && data !== null
      ? data
          .toString()
          .replace(
            /[۰-۹]/g,
            (w) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"][+w]
          )
      : data,

  toPersianCurrency: (data = "0", money = true) =>
    data !== undefined && data !== null
      ? parseInt(data) >= 0
        ? parseInt(data)
            .toLocaleString()
            .toString()
            .concat(money ? " ریال" : "")
            .replace(
              /[0-9]/g,
              (w) => ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][+w]
            )
        : "۰ ریال"
      : " ",

  dateParserWithPesianNumber: (date = new Date()) =>
    date
      ? momentJ(date)
          .locale("fa")
          .format("HH:mm jYYYY/jM/jD")
          .toString()
          .replace(
            /[0-9]/g,
            (w) => ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][+w]
          )
      : "نامشخص",

  // جدا کننده ارقام در مبالغ ریال
  numberFormat: (number) =>
    typeof number === "number"
      ? new Intl.NumberFormat("fa").format(number)
      : number,
  numberFormatUnlimiter: (number = 0) =>
    new Intl.NumberFormat("fa").format(number).replaceAll("٬", ""),
  // تبدیل تاریخ میلادی به شمسی
  dateParser: (date = new Date()) =>
    date ? momentJ(date).locale("fa").format("HH:MM jYYYY/jM/jD") : "نامشخص",

  //  تبدیل تاریخ میلادی به شمسی با تغییر روز ها
  dateParserWithDay: (date = "", day = 0) =>
    date
      ? momentJ(date).add(day, "days").locale("fa").format("jYYYY/jM/jD")
      : "نامشخص",

  // تبدیل تاریخ به تعداد روزها
  dateParserToDays: (date = "") =>
    date ? momentJ(date).jDayOfYear() : "نامشخص",

  // نمایش صحیح زمان
  timeParser: (date = "") =>
    date ? momentJ(date).locale("fa").format("HH:mm") : "نامشخص",

  // تولید عدد تصادفی
  getRandNum: () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  isEmptyObject: (obj) => {
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  },

  externalRefrenceByHTML: (htmlData = <></>) => {
    const div = document.createElement("div");
    div.innerHTML = htmlData;
    document.body.appendChild(div);
    div.firstElementChild.submit();
  },

  // note 1
  // new Map(
  // 	window.location.search
  // 		.slice(1)
  // 		.split('&')
  // // 		.map((i) => i.split('='))
  // .map(i => {
  //   const listKeyValue = i.split('=')
  //   return { [listKeyValue[0]]: listKeyValue[1] }
  // })
  // ).get('id')

  // style={{ pointerEvents: item.status < 2 && 'none' }}

  // randNumUniqe() {
  // 	// eslint-disable-next-line prefer-const

  // 	// return Math.floor(100000 + Math.random() * 900000).toString()
  // 	const nums = [1, 2, 3, 4, 0]
  // 	let item = false
  // 	let rand = 0
  // 	do {
  // 		rand = Math.floor(1 + Math.random() * 9).toString()
  // 		item = nums.some((item) => rand.toString() === item.toString())
  // 		console.log(rand, item)
  // 	} while (item)

  // 	!item && console.log({ rand: rand })
  // }
};
