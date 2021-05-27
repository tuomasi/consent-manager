import React from 'react'
var banner = {
  header: 'Cookies auf Beispiel',
  content:
    'Wir verwenden Cookies für ein komfortableres Nutzererlebnis und zu Analyse- und Marketing-zwecken. Du kannst diese Cookies jederzeit deaktivieren.'
}
var preference = {
  description:
    'Segment verwendet Daten, die von Cookies und JavaScript-Bibliotheken gesammelt wurden, um Ihr Surf-Erlebnis zu verbessern, den Website-Verkehr zu analysieren, personalisierte Werbung zu liefern und die Gesamtleistung unserer Website zu steigern.',
  warning:
    'Durch die Nutzung unserer Website stimmen Sie unserer Richtlinie zur Website-Datenerfassung zu.',
  explanation:
    'Die nachstehende Tabelle gibt einen Überblick über die Verwendung dieser Daten nach Kategorien. Um eine Kategorie der Datenerhebung abzulehnen, wählen Sie "Nein" und speichern Sie Ihre Präferenzen.'
}
export default {
  en: {
    'ui.save': 'Save',
    'ui.cancel': 'Cancel',
    'ui.yes': 'Yes',
    'ui.no': 'No',
    'ui.not_available': 'N/A',
    'ui.go_back': 'Go Back',
    'ui.yes_cancel': 'Yes, Cancel',
    'ui.header.allow': 'Allow',
    'ui.header.category': 'Category',
    'ui.header.purpose': 'Purpose',
    'ui.header.tools': 'Tools',
    'ui.banner.content':
      'We use cookies (and other similar technologies) to collect data to improve your experience on our site. By using our website, you’re agreeing to the collection of data as described in our Website Data Collection Policy.',
    'ui.banner.subContent': 'You can change your preferences at any time.',
    'ui.preferences.title': 'Website Data Collection Preferences',
    'ui.preferences.content': React.createElement(React.Fragment, null, [
      React.createElement(
        'p',
        { key: 1 },
        'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
      ),
      React.createElement(
        'p',
        { key: 2 },
        'By using our website, you’re agreeing to our Website Data Collection Policy.'
      ),
      React.createElement(
        'p',
        { key: 3 },
        'The table below outlines how we use this data by category. To opt out of a category of data collection, select “No” and save your preferences.'
      )
    ]),
    'ui.cancel.title': 'Are you sure you want to cancel?',
    'ui.cancel.content':
      'Your preferences have not been saved. By continuing to use our website, you’re agreeing to our Website Data Collection Policy.',
    'aria.functional.allow': 'Allow functional tracking',
    'aria.functional.disallow': 'Disallow functional tracking',
    'aria.marketing.allow': 'Allow marketing and analytics tracking',
    'aria.marketing.disallow': 'Disallow marketing and analytics tracking',
    'aria.advertising.allow': 'Allow advertising tracking',
    'aria.advertising.disallow': 'Disallow advertising tracking',
    'category.functional': 'Functional',
    'category.marketing': 'Marketing and Analytics',
    'category.advertising': 'Advertising',
    'category.essential': 'Essential',
    'purpose.functional.explanation':
      'To monitor the performance of our site and to enhance your browsing experience.',
    'purpose.functional.example':
      'For example, these tools enable you to communicate with us via live chat.',
    'purpose.marketing.explanation':
      'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.',
    'purpose.marketing.example':
      'For example, we collect information about which pages you visit to help us present more relevant information.',
    'purpose.advertising.explanation':
      'To personalize and measure the effectiveness of advertising on our site and other websites.',
    'purpose.advertising.example':
      'For example, we may serve you a personalized ad based on the pages you visit on our site.',
    'purpose.essential.explanation':
      'We use browser cookies that are necessary for the site to work as intended.',
    'purpose.essential.example':
      'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
  },
  de: {
    'ui.save': 'Speichern',
    'ui.cancel': 'Abbrechen',
    'ui.yes': 'Ja',
    'ui.no': 'Nein',
    'ui.not_available': 'NICHT VERFÜGBAR',
    'ui.go_back': 'Zurückgehen',
    'ui.yes_cancel': 'Ja, abbrechen',
    'ui.header.allow': 'Erlauben',
    'ui.header.category': 'Kategorie',
    'ui.header.purpose': 'Zweck',
    'ui.header.tools': 'Werkzeuge',
    'ui.banner.content': React.createElement(React.Fragment, null, [
      React.createElement('strong', { key: 1 }, banner.header),
      React.createElement('span', { key: 2 }, banner.content)
    ]),
    'ui.banner.subContent': 'INFORMATIONEN & EINSTELLUNGEN',
    'ui.preferences.title': 'Website-Datenerhebungs-Präferenzen',
    'ui.preferences.content': React.createElement(React.Fragment, null, [
      React.createElement('p', { key: 1 }, preference.description),
      React.createElement('p', { key: 2 }, preference.warning),
      React.createElement('p', { key: 3 }, preference.explanation)
    ]),
    'ui.cancel.title': 'Sind Sie sicher, dass Sie absagen wollen?',
    'ui.cancel.content':
      'Ihre Einstellungen wurden nicht gespeichert. Wenn Sie unsere Website weiterhin nutzen, stimmen Sie unserer Richtlinie zur Datenerfassung auf der Website zu.',
    'aria.functional.allow': 'Funktionales Verfolgung erlauben',
    'aria.functional.disallow': 'Funktionale Verfolgung verbieten',
    'aria.marketing.allow': 'Marketing und Analyse-Verfolgung erlauben',
    'aria.marketing.disallow': 'Marketing und Analyse-Verfolgung verbieten',
    'aria.advertising.allow': 'Werbetracking erlauben',
    'aria.advertising.disallow': 'Werbetracking verbieten',
    'category.functional': 'Funktionell',
    'category.marketing': 'Marketing und Analytik',
    'category.advertising': 'Werbung',
    'category.essential': 'Wesentlich',
    'purpose.functional.explanation':
      'Um die Leistung unserer Website zu überwachen und Ihr Surf-Erlebnis zu verbessern.',
    'purpose.functional.example':
      'Zum Beispiel können Sie mit diesen Tools mit uns per Live-Chat kommunizieren.',
    'purpose.marketing.explanation':
      'Um das Nutzerverhalten zu verstehen, um Ihnen ein relevanteres Browsing-Erlebnis zu bieten oder den Inhalt unserer Website zu personalisieren.',
    'purpose.marketing.example':
      'Zum Beispiel sammeln wir Informationen darüber, welche Seiten Sie besuchen, um uns zu helfen, relevantere Informationen zu präsentieren',
    'purpose.advertising.explanation':
      'Um die Wirksamkeit der Werbung auf unserer und anderen Websites zu personalisieren und zu messen.',
    'purpose.advertising.example':
      'Wir können Ihnen beispielsweise eine personalisierte Werbung auf der Grundlage der von Ihnen besuchten Seiten auf unserer Website anbieten.',
    'purpose.essential.explanation':
      'Wir verwenden Browser-Cookies, die notwendig sind, damit die Site wie beabsichtigt funktioniert.',
    'purpose.essential.example':
      'Wir speichern zum Beispiel Ihre Präferenzen für die Datenerfassung auf der Website, damit wir sie berücksichtigen können, wenn Sie zu unserer Website zurückkehren. Sie können diese Cookies in Ihren Browsereinstellungen deaktivieren, aber wenn Sie das tun, funktioniert die Website möglicherweise nicht wie beabsichtigt.'
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1tZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvZGVmYXVsdC1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFekIsSUFBTSxNQUFNLEdBQUc7SUFDYixNQUFNLEVBQUUsc0JBQXNCO0lBQzlCLE9BQU8sRUFDTCxvSkFBb0o7Q0FDdkosQ0FBQTtBQUNELElBQU0sVUFBVSxHQUFHO0lBQ2pCLFdBQVcsRUFDVCx1UEFBdVA7SUFDelAsT0FBTyxFQUNMLGlHQUFpRztJQUNuRyxXQUFXLEVBQ1QsdU1BQXVNO0NBQzFNLENBQUE7QUFFRCxlQUFlO0lBQ2IsRUFBRSxFQUFFO1FBQ0YsU0FBUyxFQUFFLE1BQU07UUFDakIsV0FBVyxFQUFFLFFBQVE7UUFDckIsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsSUFBSTtRQUNiLGtCQUFrQixFQUFFLEtBQUs7UUFDekIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsZUFBZSxFQUFFLGFBQWE7UUFDOUIsaUJBQWlCLEVBQUUsT0FBTztRQUMxQixvQkFBb0IsRUFBRSxVQUFVO1FBQ2hDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsaUJBQWlCLEVBQUUsT0FBTztRQUMxQixtQkFBbUIsRUFDakIsNk5BQTZOO1FBQy9OLHNCQUFzQixFQUFFLDhDQUE4QztRQUN0RSxzQkFBc0IsRUFBRSxxQ0FBcUM7UUFDN0Qsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtZQUNsRSxLQUFLLENBQUMsYUFBYSxDQUNqQixHQUFHLEVBQ0gsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQ1YsNk1BQTZNLENBQzlNO1lBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FDakIsR0FBRyxFQUNILEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUNW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
