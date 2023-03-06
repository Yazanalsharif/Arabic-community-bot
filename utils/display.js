//chalk for terminal colors
const chalk = require('chalk');

//here is function to handle some stuff for the bot
const isBurencyArabic = (id) => {
  const BurencyGroupId = process.env.GROUP_ID.toString();
  //check if the group id is the same of Burency Group and return true if yes
  if (BurencyGroupId === id.toString()) {
    return true;
  }

  //otherwise will return false
  return false;
};

//this function to display the introduction of the bot and the
const introduction = (ctx, bot) => {
  //check the place where the message came from and if from burency the bot will work correctly
  const isBurency = isBurencyArabic(ctx.chat.id);

  if (!isBurency) {
    return ctx.reply(
      `you can't use the bot here please sign in Burency Arabic Community so you can use me there`
    );
  }

  bot.telegram.sendMessage(
    process.env.GROUP_ID,
    `مرحباً بك في بيورنسي 
هذا رد آلي 🤖 /help
`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'أخر الاخبار 🌐',
              url: 'https://t.me/Burencyofficial',
            },
            {
              text: 'قوانين الجروب 📋',
              callback_data: 'rules',
            },
          ],
          [
            {
              text: 'حسابتنا الرسمية على السوشيل ميديا 🌍 ',
              callback_data: 'social',
            },
          ],
          [
            {
              text: 'شرح كامل للتداول 💡',
              callback_data: 'learn',
            },
          ],
          [
            {
              text: 'تفاصيل عن عملة BUY 🎖',
              url: 'https://coinmarketcap.com/currencies/burency/',
            },
          ],
          [
            {
              text: 'شراء BUY من المنصة 💰',
              url: 'https://www.burency.com/exchange/BUY/USDT',
            },
            {
              text: 'تحميل التطبيق 📲',
              callback_data: 'apps',
            },
          ],
          [
            {
              text: 'مراسلة الدعم التقني 📤 ',
              url: 'https://burencyglobal.zendesk.com/hc/ar/requests/new',
            },
          ],
          [
            {
              text: 'مركز دعم بيورنسي 🛃',
              url: 'https://burencyglobal.zendesk.com/hc/ar',
            },
          ],
        ],
      },
    }
  );
};

//this function must executed in action learn AND command /learn
const learnTrading = (ctx, bot) => {
  try {
    //check the place where the message came from and if from burency the bot will work correctly
    const isBurency = isBurencyArabic(ctx.chat.id);

    if (!isBurency) {
      return ctx.reply(
        `you can't use the bot here please sign in Burency Arabic Community so you can use me there`
      );
    }
    const message = `
في التالي مجموعة من الشروحات عن ادوات المنصة وطرق التداول.

يمكنك الوصول هنا بشكل مباشر عن طريق الأمر /learn`;

    bot.telegram.sendMessage(process.env.GROUP_ID, message, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'التسجيل على منصة بيورنسي',
              url: 'https://youtu.be/oMnxq2CblGE',
            },
          ],
          [
            {
              text: 'خطوات توثيق الحساب KYC',
              url: 'https://youtu.be/y8RNmUGYyGU',
            },
          ],
          [
            {
              text: 'خطوات ربط الحساب بالهاتف المحمول',
              url: 'https://youtu.be/QLCFE7Fm3Ok',
            },
          ],
          [
            {
              text: 'تفعيل المصادقة الثنائية GA ',
              url: 'https://youtu.be/hhIO7tRSu90',
            },
          ],
          [
            {
              text: 'خطوات الشراء من خلال الأمر limit order ',
              url: 'https://youtu.be/lUW4wHoiza4',
            },
          ],
          [
            {
              text: 'خطوات البيع من خلال الأمر limit order',
              url: 'https://youtu.be/rBwTd_mUBcQ',
            },
          ],
          [
            {
              text: 'خطوات الشراء من خلال الأمر Market order ',
              url: 'https://youtu.be/aDz6BTmlO78',
            },
          ],
          [
            {
              text: 'خطوات البيع من خلال الأمر Market order',
              url: 'https://youtu.be/5y5jIYYoXkU',
            },
          ],
          [
            {
              text: 'خطوات الشراء من خلال الأمر stop limit',
              url: 'https://youtu.be/mXL8Fc9TBnE',
            },
          ],
          [
            {
              text: 'خطوات البيع من خلال الأمر stop limit ',
              url: 'https://youtu.be/rv-B4x5Oipo',
            },
          ],
        ],
      },
    });
  } catch (error) {
    console.log(chalk.white.bgRed(error.message));
  }
};

//social media function to display the list of buttons that has urls to the social media channels
const socialMedia = (ctx, bot) => {
  try {
    //check the place where the message came from and if from burency the bot will work correctly
    const isBurency = isBurencyArabic(ctx.chat.id);

    if (!isBurency) {
      return ctx.reply(
        `you can't use the bot here please sign in Burency Arabic Community so you can use me there`
      );
    }

    const message = `يمكنك الوصول الى الحسابات الرسمية للشركة بيورنسي على مواقع التواصل الأجتماعي من خلال الضغط على الازرار أدناه.

يمكنك الوصول هنا بشكل مباشر عن طريق الأمر /social `;
    bot.telegram.sendMessage(process.env.GROUP_ID, message, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'التلجرام العربي 🗳',
              url: 'https://t.me/BurencyArabCommunity',
            },
            {
              text: 'التلجرام الأنجليزي 🗳',
              url: 'https://t.me/BurencyCommunity',
            },
          ],
          [
            {
              text: 'تويتر العربي 🐦',
              url: 'https://twitter.com/BurencyArabic',
            },
            {
              text: 'تويتر الأنجليزي 🐦 ',
              url: 'https://twitter.com/BurencyOfficial',
            },
          ],
          [
            {
              text: 'فيس بوك العربي 🌐',
              url: 'https://www.facebook.com/burency.arabic',
            },
            {
              text: 'فيس بوك الأنجليزي 🌐',
              url: 'https://www.facebook.com/BurencyOfficial/',
            },
          ],
          [
            {
              text: 'انستغرام العربي 📷',
              url: 'https://www.instagram.com/burency.arabic/',
            },
            {
              text: 'انستغرام الأنجليزي 📷',
              url: 'https://www.instagram.com/burency.official/',
            },
          ],
          [
            {
              text: 'يوتيوب 📽',
              url: 'https://www.instagram.com/burency.arabic/',
            },
            {
              text: 'لينكدين 💼',
              url: 'https://www.linkedin.com/company/burencyofficial',
            },
          ],
          [
            {
              text: 'منصة بيورنسي 🏦',
              url: 'https://www.burency.com',
            },
          ],
        ],
      },
    });
  } catch (error) {
    console.log(chalk.red.bgRed.bold('there is some error here'));
  }
};

const rules = (ctx) => {
  try {
    const message = `نحن معكم يوميا لخدمتكم والإجابة على كافة أستفسارتكم على مدار 24 ساعة
عدا يوم الجمعة
الا في الحالات الطارئة
   
الجروب لدعم مشروع بيورنسي ولدعم العملات الموجودة على منصة بيورنسي والتباحث فيها .
   
إن الترويج لأي مشروع لا يمت لبيورنسي بأي صلة سيؤدي إلى الطرد أو الحظر النهائي.

⭕ كما سيتم الإستبعاد لكل من سيقوم بالتطاول اللفظي أو نشر صور غير لائقة أو خادشة للحياء العام بحيث يستطيع متابعة الجروب دون إمكانية التواصل وإرسال الرسائل .
   
ملاحظات يجب اخذها بعين الاعتبار:

*لن يقوم أي مسؤول بمراسلتك أولاً، كل من فعل ذلك هو محتال/مخادع.

*لن يرسل لك أي مسؤول رسالة خاصة تحتوي على عنوان مساهمة أو تقديم مكافأة.

*لن يطلب منك أي مسؤول المال أو الرموز لأي سبب من الأسباب يرجى التحقق بعناية من الأسم و أسم المستخدم الذي تتعامل معه.

*يرجى الحذر من المحتالين الذين ينتحلون هوية المسؤولين، سوف يحاولون خداعك.`;

    ctx.reply(message);
  } catch (error) {
    if (error.message) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};

const apps = (ctx, bot) => {
  try {
    const isBurencyGroup = isBurencyArabic(ctx.chat.id);

    if (!isBurencyGroup) {
      return ctx.reply(
        `you can't use the bot here please sign in Burency Arabic Community so you can use me there`
      );
    }

    const message = `
يمكنك تحميل تطبيق بيورنسي على نظام الأندرويد و الأيفون من خلال ضغط على الأزرار ادناه.

يمكنك الوصول هنا بشكل مباشر عن طريق الأمر /apps`;
    bot.telegram.sendMessage(process.env.GROUP_ID, message, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'ANDROID',
              url: 'https://play.google.com/store/apps/details?id=com.burency.app',
            },
            {
              text: 'IOS',
              url: 'https://apps.apple.com/ae/app/burency/id1548673602?l=ar',
            },
          ],
        ],
      },
    });
  } catch (error) {
    if (error.message) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};

module.exports = {
  introduction,
  socialMedia,
  learnTrading,
  rules,
  apps,
};
