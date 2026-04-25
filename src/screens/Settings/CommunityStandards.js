import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { t } from '../../components/lang';

export const CommunityStandards = () => {
  const mainData = useSelector(st => st.mainData);
  const lang = mainData.lang;

  const content = {
    en: {
      title: "Community Standards and Safety Policy",
      appName: "chamba",
      sections: [
        {
          heading: "About This Policy",
          text: "This Community Standards and Safety Policy applies to the chamba mobile application. By using chamba, you agree to comply with all terms outlined in this policy."
        },
        {
          heading: "Our Commitment to Safety",
          text: "We are committed to providing a safe environment for all users. Our community standards are designed to protect everyone, especially children, from harmful content and behavior."
        },
        {
          heading: "ZERO TOLERANCE FOR CHILD SEXUAL ABUSE AND EXPLOITATION",
          text: "chamba has a strict ZERO-TOLERANCE policy regarding child sexual abuse and exploitation of children:\n\n• Any content involving the sexual exploitation, sexual abuse, or sexualization of children is STRICTLY PROHIBITED and will result in immediate account termination and mandatory reporting to law enforcement authorities.\n\n• Child Sexual Abuse Material (CSAM) is illegal. Any sharing, distribution, creation, or solicitation of CSAM will be immediately reported to the National Center for Missing & Exploited Children (NCMEC), local law enforcement, and appropriate international authorities.\n\n• Content that sexualizes minors, depicts child nudity, or endangers children in any way is absolutely forbidden.\n\n• Grooming behavior, predatory conduct, or any attempt to exploit, abuse, or endanger children will result in immediate account removal and law enforcement notification.\n\n• We employ advanced technology and human moderation to detect and prevent child exploitation.\n\n• We work closely with law enforcement agencies worldwide to protect children."
        },
        {
          heading: "Prohibited Content and Behavior",
          text: "The following types of content and behavior are strictly prohibited on chamba:\n\n• Child sexual abuse material (CSAM)\n• Any sexual content involving minors\n• Child exploitation or endangerment\n• Grooming or predatory behavior toward minors\n• Harassment, bullying, or threats\n• Hate speech or discrimination\n• Violence or graphic content\n• Sharing of private information without consent\n• Illegal activities or content\n• Spam or fraudulent behavior"
        },
        {
          heading: "Reporting Violations",
          text: "If you encounter content or behavior that violates these standards, particularly anything involving children, please report it immediately through the app's reporting feature.\n\nWe review all reports promptly and take appropriate action, which may include:\n\n• Immediate content removal\n• Account suspension or permanent termination\n• Mandatory reporting to law enforcement\n• Full cooperation with legal authorities\n• Evidence preservation for investigations"
        },
        {
          heading: "Our Responsibility and Enforcement",
          text: "chamba takes child safety extremely seriously. We:\n\n• Actively monitor our platform 24/7\n• Use automated detection systems for harmful content\n• Employ human moderators to review reports\n• Respond immediately to violations\n• Cooperate fully with law enforcement\n• Continuously improve our safety measures\n\nThe safety of our community, especially children, is our highest priority and non-negotiable."
        },
        {
          heading: "Contact Information",
          text: "For questions about this policy or to report serious violations:\n\nChild Safety Contact:\n• Email: chambasafety@gmail.com\n• This dedicated contact handles all child safety reports and CSAM incidents\n• Reports are reviewed 24/7 and escalated to law enforcement immediately when necessary\n\nGeneral Reporting:\n• Use the in-app reporting feature for violations\n• Contact us immediately if you witness child exploitation\n\nWe are committed to making chamba a safe platform for all users."
        }
      ],
      footer: "Last updated: April 2026\n\nDeveloper: chamba Development Team\n\nBy using chamba, you agree to abide by these Community Standards and Safety Policies. Violations will result in account termination and may be reported to law enforcement."
    },
    ru: {
      title: "Стандарты сообщества и политика безопасности",
      appName: "chamba",
      sections: [
        {
          heading: "О данной политике",
          text: "Настоящая Политика стандартов сообщества и безопасности применяется к мобильному приложению chamba. Используя chamba, вы соглашаетесь соблюдать все условия, изложенные в данной политике."
        },
        {
          heading: "Наша приверженность безопасности",
          text: "Мы стремимся обеспечить безопасную среду для всех пользователей. Наши стандарты сообщества разработаны для защиты всех, особенно детей, от вредного контента и поведения."
        },
        {
          heading: "НУЛЕВАЯ ТОЛЕРАНТНОСТЬ К СЕКСУАЛЬНОМУ НАСИЛИЮ НАД ДЕТЬМИ И ИХ ЭКСПЛУАТАЦИИ",
          text: "chamba придерживается строгой политики НУЛЕВОЙ ТОЛЕРАНТНОСТИ в отношении сексуального насилия над детьми и эксплуатации детей:\n\n• Любой контент, связанный с сексуальной эксплуатацией, сексуальным насилием или сексуализацией детей СТРОГО ЗАПРЕЩЕН и приведет к немедленному удалению аккаунта и обязательному сообщению в правоохранительные органы.\n\n• Материалы сексуального насилия над детьми (CSAM) являются незаконными. Любое распространение, передача, создание или запрос CSAM будет незамедлительно передано в Национальный центр по делам пропавших без вести и эксплуатируемых детей (NCMEC), местные правоохранительные органы и соответствующие международные организации.\n\n• Контент, который сексуализирует несовершеннолетних, изображает детскую наготу или подвергает детей опасности любым способом, категорически запрещен.\n\n• Груминг, хищническое поведение или любая попытка эксплуатировать, совершать насилие или подвергать опасности детей приведет к немедленному удалению аккаунта и уведомлению правоохранительных органов.\n\n• Мы используем передовые технологии и модерацию для обнаружения и предотвращения эксплуатации детей.\n\n• Мы тесно сотрудничаем с правоохранительными органами по всему миру для защиты детей."
        },
        {
          heading: "Запрещенный контент и поведение",
          text: "Следующие типы контента и поведения строго запрещены в chamba:\n\n• Материалы сексуального насилия над детьми (CSAM)\n• Любой сексуальный контент с участием несовершеннолетних\n• Эксплуатация или угроза детям\n• Груминг или хищническое поведение по отношению к несовершеннолетним\n• Преследование, издевательства или угрозы\n• Разжигание ненависти или дискриминация\n• Насилие или графический контент\n• Распространение личной информации без согласия\n• Незаконная деятельность или контент\n• Спам или мошенническое поведение"
        },
        {
          heading: "Сообщение о нарушениях",
          text: "Если вы столкнулись с контентом или поведением, нарушающим эти стандарты, особенно связанным с детьми, немедленно сообщите об этом через функцию жалобы в приложении.\n\nМы оперативно рассматриваем все сообщения и принимаем соответствующие меры, которые могут включать:\n\n• Немедленное удаление контента\n• Приостановка или постоянное удаление аккаунта\n• Обязательное сообщение в правоохранительные органы\n• Полное сотрудничество с органами власти\n• Сохранение доказательств для расследований"
        },
        {
          heading: "Наша ответственность и контроль",
          text: "chamba относится к безопасности детей чрезвычайно серьезно. Мы:\n\n• Активно отслеживаем нашу платформу 24/7\n• Используем автоматизированные системы обнаружения вредного контента\n• Нанимаем модераторов для проверки жалоб\n• Немедленно реагируем на нарушения\n• Полностью сотрудничаем с правоохранительными органами\n• Постоянно улучшаем наши меры безопасности\n\nБезопасность нашего сообщества, особенно детей, является нашим высшим приоритетом и не подлежит обсуждению."
        },
        {
          heading: "Контактная информация",
          text: "По вопросам об этой политике или для сообщения о серьезных нарушениях:\n\nКонтакт по безопасности детей:\n• Email: chambasafety@gmail.com\n• Этот специальный контакт обрабатывает все сообщения о безопасности детей и инциденты с CSAM\n• Сообщения проверяются 24/7 и немедленно передаются правоохранительным органам при необходимости\n\nОбщие сообщения:\n• Используйте функцию жалобы в приложении для сообщения о нарушениях\n• Немедленно свяжитесь с нами, если вы стали свидетелем эксплуатации детей\n\nМы стремимся сделать chamba безопасной платформой для всех пользователей."
        }
      ],
      footer: "Последнее обновление: Апрель 2026\n\nРазработчик: Команда разработки chamba\n\nИспользуя chamba, вы соглашаетесь соблюдать эти Стандарты сообщества и Политики безопасности. Нарушения приведут к удалению аккаунта и могут быть переданы в правоохранительные органы."
    }
  };

  const currentContent = lang === 'en' ? content.en : content.ru;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{currentContent.title}</Text>

        {currentContent.sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.heading}>{section.heading}</Text>
            <Text style={styles.text}>{section.text}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>{currentContent.footer}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});
