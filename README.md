![Image](src/metadata/artwork.png)
# **Atlaskit** for **Framer** X

Atlaskit is Atlassian's official UI library, built according to the Atlassian Design Guidelines. This repository focuses on the port of Atlaskit to Framer X.  
  
More info on Atlaskit and its specifications can be found in the **Sources** section.

----

## Why **Framer** X?
Because Framer X is based on the same web technologies that the Atlaskit components are based on 😍. That makes designing with Atlaskit components much easier and more true-to-life than ever before.

## **Contributing** / **Editing**
To get started, clone the repo and open the `Atlaskit.framerx` file in **Framer** X.
After that, open a new Terminal window and navigate to the repo. Use `./framerxwatcher Atlaskit.framerx src` to watch the **Framer** X project for changes and extract the sources whenever it's needed.

### **Additional Info**

You may have to make `framerxwatcher` an executable first before you can run it. To do that, execute `chmod u+x ./framerxwatcher` in the Terminal window followed by the previously stated command.

Before you create a commit, delete the `src` folder and save the `.framerx` file again with the watcher running. This prevents files that have been moved or deleted from getting in your way.

### **I don't want to run an unknown file**
That's totally understandable, you should never run any executables that you don't trust. However, the source code for `framerxwatcher` is freely available so you can check for yourself that it's a safe executable. You can find a link to it in the [sources list](#Sources).  
  
If you still don't trust it, you can simply copy the `.framerx` file, rename it to `.zip` and use the archiver tool to extract its contents. It'll accomplish the same as `framerxwatcher`, but it won't be automated.

## **Sources**
- [**Framer X Project - GitHub** ***(Main)***](https://github.com/lucasritter/atlaskit-framerx/)
- [**Framer X Project - BitBucket**](https://bitbucket.org/lucasritter/atlaskit-framerx/)
- [**Atlaskit Specs**](https://atlaskit.atlassian.com)
- [**Atlaskit Issue**](https://bitbucket.org/atlassian/atlaskit-mk-2/issues/156/framer-x-kit)
- [**Framer X Watcher**](https://github.com/lucasritter/framer-x-watcher)