import React from 'react';
import styles from './Profile.module.css';
import Avatar from '../../components/Avatar/Avatar';
import AccountIcon from '../../components/Icons/AccountIcon';
import ProfileMenuBar from '../../components/ProfileMenuBar/ProfileMenuBar';
import NotificationsIcon from '../../components/Icons/Notifications';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import HelpIcon from '../../components/Icons/HelpIcon';
import LogoutIcon from '../../components/Icons/LogoutIcon';
import NavBar from '../../components/NavBar/NavBar';

function Profile(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Avatar imageSrc="/dieter.jpeg" />
        <h1 className={styles.profileName}>Dieter Bohlen</h1>
        <span className={styles.profileStatus}>Premium</span>
      </header>
      <main className={styles.profileMenu}>
        <ProfileMenuBar link="#" icon={<AccountIcon />} text="Account" />
        <ProfileMenuBar
          link="#"
          icon={<NotificationsIcon />}
          text="Notifications"
        />
        <ProfileMenuBar link="#" icon={<SettingsIcon />} text="Settings" />
        <ProfileMenuBar link="#" icon={<HelpIcon />} text="Help" />
        <ProfileMenuBar link="#" icon={<LogoutIcon />} text="Logout" />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default Profile;
