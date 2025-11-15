import { motion } from 'framer-motion';
import { zoomFadeInAnimation } from '@/styles/Animations';

function Windows() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-6">
        Installation Guide for Windows
      </h1>
      <motion.main>
        <motion.section>
          <div className="relative w-full h-full rounded-[10px] overflow-hidden ransition-transform duration-300 hover:scale-105 hover:mb-4 hover:mt-4">
            <motion.img
              variants={zoomFadeInAnimation}
              initial="initial"
              animate="animate"
              src="assets/Images/bg-sugar.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full h-3.5 bg-linear-to-t from-white/10 to-transparent backdrop-blur-md "></div>
          </div>
        </motion.section>
        <motion.div>
          <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6 mt-4">
            Steps to Install Sugar on a Stick on Windows
          </h2>
          <div className="flex justify-center items-center gap-1.5 mb-4">
            <motion.img
              variants={zoomFadeInAnimation}
              initial="initial"
              animate="animate"
              src="assets/Images/WindowsLogo.gif"
              alt="windows"
              className="ransition-transform duration-300 hover:scale-105 hover:mb-4 hover:mt-4 rounded-md w-8 h-8"
            />
            <div className="font-sans font-medium text-2xl dark:text-white">
              There are three ways to do this
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300"
          >
            <div className="mb-4 gap-2">
              <h1 className="font-sans text-4xl font-bold text-amber-600 mb-4">
                1. Use a USB flash drive
              </h1>
              <p>
                <motion.img
                  variants={zoomFadeInAnimation}
                  initial="initial"
                  animate="animate"
                  src="assets/Images/usb-drive.jpg"
                  alt="windows"
                  className="ransition-transform duration-300  hover:scale-105 hover:mb-4 hover:mt-4 w-full h-auto rounded-lg"
                  rounded-lg
                />
              </p>
              <details className="mt-1.5 text-center font-bold font-sans text-2xl">
                <summary className="text-blue-400 hover:text-blue-600">
                  Use a USB Flash Drive for Installation”
                </summary>
                <main>
                  <main className="text-center">
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                      <li>
                        Use{' '}
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://blogs.windows.com/"
                        >
                          Windows 7 built-in Disk Image Burner
                        </a>{' '}
                        or a free utility, like{' '}
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://www.imgburn.com/"
                        >
                          ImgBurn
                        </a>
                        , to write the downloaded Sugar on a Stick .iso file
                        onto a blank CD.
                      </li>
                      <li>
                        Insert a USB flash drive (or SD Card{' '}
                        <sup>
                          <a
                            className="text-blue-400 hover:text-blue-600 underline"
                            href="https://wiki.sugarlabs.org/go/Sugar_on_a_Stick/Installation#Notes"
                          >
                            Notes
                          </a>{' '}
                        </sup>
                        ) with 2 GB or more of free space into your computer.
                      </li>
                      <li>
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://wiki.sugarlabs.org/go/Sugar_on_a_Stick/Boot"
                        >
                          Boot your computer
                        </a>{' '}
                        with the CD-ROM disc. You probably need to press F1,
                        F10, F12, Esc, or a similar key as the computer starts
                        up in order to set the boot source for your computer to
                        the CD-ROM device.
                      </li>
                      <li>
                        A successful boot will take you into Sugar on a Stick.
                        You can From there, open the Terminal Activity,
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="red"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-square-terminal-icon lucide-square-terminal"
                          >
                            <path d="m7 11 2-2-2-2" />
                            <path d="M11 13h4" />
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                          </svg>{' '}
                          , from the Home list View.{' '}
                        </div>
                        <motion.img
                          variants={zoomFadeInAnimation}
                          initial="initial"
                          animate="animate"
                          src="http://wiki.sugarlabs.org/images/9/9b/Home_ListView_button.png"
                          alt=""
                          className="mt-2 "
                        />
                      </li>
                      <li>
                        Switch to run commands with 'root' user permissions by
                        entering <code className="border-2 p-0.5"> su -</code>{' '}
                        on the command line.
                      </li>
                      <li>
                        Change the working directory, by entering{' '}
                        <code className="border-2 p-0.5">
                          cd /run/initramfs/live/LiveOS
                        </code>
                      </li>
                      <li>
                        Verify the USB/SD scsi drive node name (such as sda,
                        sdb, etc.) and partition (such as 1, 2, etc.) for your
                        USB/SD device. It would look like, for example,
                        <code className="border-2 p-0.5"> /dev/sdb1</code>.{' '}
                        <br />
                        The <code className="border-2 p-0.5">df -Th</code>{' '}
                        command shows your device filesystem on a device node,
                        for example,{' '}
                        <code className="border-2 p-0.5">/dev/sdb1</code>,
                        mounted on a directory mount point, such as
                        /run/media/liveuser/&lt;USBdeviceManufacturer&gt;
                        <div className="justify-center mt-2">
                          <span className="font-mono">
                            You should see something like the following:{' '}
                          </span>
                          <details>
                            <summary className="text-blue-700">[show]</summary>
                            <p>
                              <code className="bg-gray-700 text-white p-2 rounded-md block overflow-x-auto">
                                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                                  <thead>
                                    <tr>
                                      <th
                                        colSpan={7}
                                        className="border-b p-2 text-left font-mono bg-black text-white font-extrabold"
                                      >
                                        [root@localhost ~]# df -Th
                                      </th>
                                    </tr>
                                    <tr className="bg-black text-white font-extrabold">
                                      <th className="border p-2">Filesystem</th>
                                      <th className="border p-2">Type</th>
                                      <th className="border p-2">Size</th>
                                      <th className="border p-2">Used</th>
                                      <th className="border p-2">Avail</th>
                                      <th className="border p-2">Use%</th>
                                      <th className="border p-2">Mounted on</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="border p-2">
                                        /dev/mapper/live-rw
                                      </td>
                                      <td className="border p-2">ext4</td>
                                      <td className="border p-2">2.9G</td>
                                      <td className="border p-2">2.1G</td>
                                      <td className="border p-2">773M</td>
                                      <td className="border p-2">74%</td>
                                      <td className="border p-2">/</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">devtmpfs</td>
                                      <td className="border p-2">devtmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0%</td>
                                      <td className="border p-2">/dev</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">72K</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">1%</td>
                                      <td className="border p-2">/dev/shm</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">632K</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">1%</td>
                                      <td className="border p-2">/run</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0%</td>
                                      <td className="border p-2">
                                        /sys/fs/cgroup
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">/dev/sr0</td>
                                      <td className="border p-2">iso9660</td>
                                      <td className="border p-2">670M</td>
                                      <td className="border p-2">670M</td>
                                      <td className="border p-2">0</td>
                                      <td className="border p-2">100%</td>
                                      <td className="border p-2">
                                        /run/initramfs/live
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">32K</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">1%</td>
                                      <td className="border p-2">/tmp</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">
                                        varcacheyum
                                      </td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0%</td>
                                      <td className="border p-2">
                                        /var/cache/yum
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">vartmp</td>
                                      <td className="border p-2">tmpfs</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0</td>
                                      <td className="border p-2">2.0G</td>
                                      <td className="border p-2">0%</td>
                                      <td className="border p-2">/var/tmp</td>
                                    </tr>
                                    <tr>
                                      <td className="border p-2">/dev/sdb1</td>
                                      <td className="border p-2">vfat</td>
                                      <td className="border p-2">3.8G</td>
                                      <td className="border p-2">4.0K</td>
                                      <td className="border p-2">3.8G</td>
                                      <td className="border p-2">1%</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </code>
                            </p>
                          </details>
                        </div>
                      </li>
                      <li>
                        Unmount the USB device filesystem with this command:{' '}
                        <code className="border-2 p-0.5">
                          umount /run/media/liveuser/MyUSBdiscMountPoint
                        </code>
                        , where <b>MyUSBdiscMountPoint</b> is <b>SanDisk</b> in
                        the dropdown example, above.
                      </li>
                      <li>
                        Execute this command line: (Substitute the{' '}
                        <code className="border-2 p-0.5">/dev/sd?1</code>,
                        below, with the node name you determined in step 7,
                        above.)
                        <code className="bg-gray-700 text-white p-2 rounded-md block overflow-x-auto">
                          ./livecd-iso-to-disk --reset-mbr --overlay-size-mb 500
                          --home-size-mb 800 --delete-home --unencrypted-home
                          /run/initramfs/livedev /dev/sd?1
                        </code>
                        (The 500 and 800 size values, above, are suitable for a
                        2 GB USB device. For a 4 GB device, one might use 1000
                        and 1600 megabytes instead.) The installation transcript
                        should look
                        <div className="flex gap-2 justify-center mt-2">
                          <span
                            className="
                    font-mono"
                          >
                            like the following:
                          </span>
                          <details>
                            <summary className="text-blue-700">[show]</summary>
                            <p>
                              <code className="bg-gray-700 text-white p-2 rounded-md block overflow-x-auto text-start">
                                [root@localhost LiveOS]# livecd-iso-to-disk
                                --overlay-size-mb 500 --home-size-mb 800
                                --unencrypted-home /run/initramfs/livedev
                                /dev/sdb1 <br />
                                Verifying image... /dev/sr0: <br />
                                b0a9414ff7eb79b680d5c86440e19587 <br />
                                Fragment sums: <br />
                                9bfe23577651c88dcfb78c76ac3a28a5c53eead4561e3bdc5921b8b2e748{' '}
                                <br />
                                Fragment count: 20 Press [Esc] to abort check.{' '}
                                <br />
                                Checking: 100.0% <br />
                                The media check is complete, the result is:
                                PASS.
                                <br /> It is OK to use this media. <br />
                                Copying live image to target device. <br />
                                squashfs.img <br />
                                630,784,000 100% 1.96MB/s 0:05:06 (xfr#1,
                                to-chk=0/1) <br /> osmin.img <br />
                                8,192 100% 0.00kB/s 0:00:00 (xfr#1, to-chk=0/1){' '}
                                <br />
                                Updating boot config file <br />
                                Initializing persistent overlay file <br />
                                500+0 records in <br />
                                500+0 records out <br />
                                524288000 bytes (524 MB) copied, 216.717 s, 2.4
                                MB/s <br />
                                Initializing persistent /home <br />
                                800+0 records in <br />
                                800+0 records out <br />
                                838860800 bytes (839 MB) copied, 344.643 s, 2.4
                                MB/s <br />
                                Formatting unencrypted /home <br />
                                mke2fs 1.42.8 (20-Jun-2013)br Filesystem label =
                                <br /> OS type: Linux <br />
                                Block size=4096 (log=2) <br />
                                Fragment size=4096 (log=2) <br />
                                Stride=0 blocks, Stripe width=0 blocks <br />
                                51296 inodes, 204800 blocks <br />
                                10240 blocks (5.00%) reserved for the super user{' '}
                                <br />
                                First data block=0 <br />
                                Maximum filesystem blocks=209715200 <br />7
                                block groups <br />
                                32768 blocks per group, 32768 fragments per
                                group <br />
                                7328 inodes per group <br />
                                Superblock backups stored on blocks: <br />
                                32768, 98304, 163840 <br />
                                Allocating group tables: done <br />
                                Writing inode tables: done <br />
                                Creating journal (4096 blocks): done <br />
                                Writing superblocks and filesystem accounting
                                information: done <br />
                                tune2fs 1.42.8 (20-Jun-2013) <br />
                                Setting maximal mount count to -1 <br />
                                Setting interval between checks to 0 seconds{' '}
                                <br />
                                Installing boot loader <br />
                                Target device is now set up with a Live image!
                              </code>
                            </p>
                          </details>
                        </div>
                      </li>
                      <li>Shutdown the physical machine.</li>
                      <li>
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://wiki.sugarlabs.org/go/Sugar_on_a_Stick/Boot"
                        >
                          Reboot your computer{' '}
                        </a>
                        from the newly-installed Live USB with Sugar on a Stick.
                      </li>
                    </ol>
                  </main>
                </main>
              </details>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300"
          >
            <h1 className="font-sans text-4xl font-bold text-amber-600 mb-4">
              2. Use Fedora Live USB Creator
            </h1>
            <motion.div>
              <motion.img
                variants={zoomFadeInAnimation}
                initial="initial"
                animate="animate"
                src="assets/Images/LiveUSB.webp"
                alt="USB"
                className="transition-transform duration-300 hover:scale-105 hover:mb-4 hover:mt-4 w-full h-auto rounded-lg"
              />

              <details className="mt-1.5 text-center font-bold font-sans text-2xl">
                <summary className="text-blue-400 hover:text-blue-600">
                  “Create a Live USB Using Fedora Live USB Creator”
                </summary>
                <main>
                  <main className="text-center mt-2">
                    <div className="bg-red-800 rounded p-2 font-mono font-bold mt-2.5">
                      NOTE: (This installation method is NOT recommended for
                      LONG-TERM usage of Sugar on a Stick!! Catastrophic data
                      corruption may occur when the USB stick gets full!{' '}
                      <a
                        className="text-blue-400 hover:text-blue-600 underline"
                        href="https://fedoraproject.org/wiki/LiveOS_image#Home_filesystem"
                      >
                        See why
                      </a>
                      .)
                    </div>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                      <li className="flex justify-center">
                        Download the Live USB Creator from{' '}
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://fedoraproject.org/wiki/Infrastructure/Fedorahosted-retirement"
                        >
                          <div className="flex">
                            Fedora.{' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="red"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-external-link-icon lucide-external-link"
                            >
                              <path d="M15 3h6v6" />
                              <path d="M10 14 21 3" />
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                          </div>
                        </a>
                      </li>
                      <motion.img
                        variants={zoomFadeInAnimation}
                        initial="initial"
                        animate="animate"
                        src="assets/Images/fedora-step1.webp"
                        alt=""
                        className="transition-transform duration-300 hover:scale-105 hover:mb-4 hover:mt-4 w-full h-auto rounded-lg"
                      />
                      <li>
                        Insert a USB flash drive (or SD Card{' '}
                        <sup>
                          <a
                            className="text-blue-400 hover:text-blue-600 underline"
                            href="https://wiki.sugarlabs.org/go/Sugar_on_a_Stick/Installation#Notes"
                          ></a>
                          Notes
                        </sup>
                        ) with 2 GB or more of free space into your computer.
                      </li>
                      <li>Launch Live USB Creator.</li>
                      <li>Select Either</li>
                      <li>
                        1) the 'Browse' button to 'Use existing Live CD' and
                        find the downloaded .iso file image on your system.
                      </li>
                      <li>
                        2) Download Fedora and select Fedora-SoaS-
                        {"{'i386 | x86_64'}"}-{'{22 | 23}'} (This automates the
                        download and checksum routine and directly burns to the
                        USB/ SDCard
                      </li>
                      <li>
                        Adjust the Persistent Storage slider. This enables you
                        to save changes to the system and additional Sugar
                        Activities onto the device. (aka persistence file or
                        Overlay --this space by default is write once only)
                        --see below for additional way to make /home a rw
                        overlay
                      </li>
                      <li>
                        Select your flash drive as the target, and click the{' '}
                        <b> Create Live USB</b> button.
                      </li>
                      <li>
                        With the latest version of Fedora LiveUSB Creator you
                        have TWO (2) option for burning method
                      </li>
                      <li>
                        1) CP (non destructive) -- meaning you can still use the
                        unused space on a larger (8-16-32-64Gb) usb for whatever
                        post burn.
                      </li>
                      <li>
                        2) DD ( the old school way) Note: THIS WILL destroy any
                        previous data make sure you properly select the drive to
                        use AND make backups of any pre-existing important data
                        (you will not be easily able to retrieve overwritten
                        data)
                      </li>
                      <li>
                        Wait for the process to finish, then close the Live USB
                        Creator program.
                      </li>
                      <li>
                        Stop your flash drive with the{' '}
                        <b>Safely Remove Hardware and Eject Media</b>{' '}
                        notification area icon dialog, and eject it.
                      </li>
                    </ol>
                    <div className="flex flex-col mt-1.5 text-start">
                      <span>
                        See a{' '}
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://wiki.sugarlabs.org/go/Platform_Team"
                        >
                          screenshot tutorial
                        </a>
                        for this.
                      </span>
                      <span>
                        See a{' '}
                        <a
                          className="text-blue-400 hover:text-blue-600 underline"
                          href="https://www.youtube.com/watch?v=ieIj4aECk88"
                        >
                          video
                        </a>
                        of an earlier version of this process.
                      </span>
                    </div>
                  </main>
                </main>
              </details>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300"
          >
            <h1 className="font-sans text-4xl font-bold text-amber-600 mb-5">
              3.Setup Sugar on a Stick Using a Virtual Machine
            </h1>
            <motion.div>
              <motion.img
                variants={zoomFadeInAnimation}
                initial="initial"
                animate="animate"
                src="assets/Images/virtual_soas.png"
                alt="SOAS"
                className="transition-transform duration-300 hover:scale-105 hover:mb-4 hover:mt-4 w-full h-auto rounded-lg"
              />{' '}
              <details className="mt-1.5 text-center font-bold font-sans text-2xl">
                <summary className="text-blue-400 hover:text-blue-600">
                  Install Sugar on a Stick via Virtual Machine
                </summary>
                <main>
                  <main>
                    <ol className="list-decimal list-inside mt-2 space-y-2 text-center">
                      <li>Install VirtualBox (or another VM software).</li>
                      <li>
                        Create a new virtual machine and select Linux → Fedora
                        (64-bit) (or plain Fedora if 64-bit is not available).
                      </li>
                      <li>
                        Attach the Sugar on a Stick ISO as a virtual CD in the
                        VM’s storage settings.
                      </li>
                      <li>
                        Connect a USB storage device to your computer and enable
                        the VirtualBox USB controller. Add a filter so the VM
                        can recognize the USB device.
                      </li>
                      <li>
                        Start the virtual machine and verify that the USB device
                        is detected inside the VM.
                      </li>
                      <li>
                        Use the df -Th command in the VM to check the USB
                        device’s filesystem and mount point (e.g., /dev/sda1
                        mounted on
                        /run/media/&lt;AccountName&gt;/&lt;USBdeviceManufacturer&gt;).
                      </li>
                      <li>
                        Run the livecd-iso-to-disk script (as in the “Burn a
                        CD-ROM disc” section) to copy the system to the USB
                        drive.
                      </li>
                      <li>Shutdown the VM after the script completes.</li>
                      <li>
                        Reboot your physical computer from the newly-created
                        Live USB to use Sugar on a Stick.
                      </li>
                    </ol>
                  </main>
                </main>
              </details>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>
    </>
  );
}

export default Windows;
