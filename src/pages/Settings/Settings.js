import { AppLanguage, PageContainer, Translate } from "components";
import { componentSizes } from "constantStrings";
import { ChangeNumberOfDays, EditSettings, ToggleTheme } from "pages/Settings";
import React from "react";
import styles from "./Settings.module.css";

const componentName = "Settings";

const Settings = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <Translate section={componentName} text="languageSectionHeader" />
        </div>
        <div className={styles.section}>
          <div className={styles.languageButtons}>
            <AppLanguage buttonSize={componentSizes.small} />
          </div>
        </div>

        <div className={styles.header}>
          <Translate section={componentName} text="themeSectionHeader" />
        </div>
        <div className={styles.section}>
          <ToggleTheme />
        </div>

        <div className={styles.header}>
          <Translate section={componentName} text="daysSectionHeader" />
        </div>
        <div className={styles.section}>
          <ChangeNumberOfDays />
        </div>

        <div className={styles.header}>
          <Translate
            section={componentName}
            text="accountSettingsSectionHeader"
          />
        </div>
        <div className={styles.section}>
          <EditSettings />
        </div>
      </div>
    </PageContainer>
  );
};

export default Settings;
