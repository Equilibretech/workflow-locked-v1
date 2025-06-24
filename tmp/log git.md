2025-06-23T17:23:31.8554694Z Current runner version: '2.325.0'
2025-06-23T17:23:31.8592229Z ##[group]Operating System
2025-06-23T17:23:31.8593476Z Ubuntu
2025-06-23T17:23:31.8594406Z 24.04.2
2025-06-23T17:23:31.8595267Z LTS
2025-06-23T17:23:31.8595974Z ##[endgroup]
2025-06-23T17:23:31.8597132Z ##[group]Runner Image
2025-06-23T17:23:31.8598156Z Image: ubuntu-24.04
2025-06-23T17:23:31.8598962Z Version: 20250615.1.0
2025-06-23T17:23:31.8600945Z Included Software: https://github.com/actions/runner-images/blob/ubuntu24/20250615.1/images/ubuntu/Ubuntu2404-Readme.md
2025-06-23T17:23:31.8603415Z Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu24%2F20250615.1
2025-06-23T17:23:31.8605164Z ##[endgroup]
2025-06-23T17:23:31.8606039Z ##[group]Runner Image Provisioner
2025-06-23T17:23:31.8607304Z 2.0.437.1
2025-06-23T17:23:31.8608125Z ##[endgroup]
2025-06-23T17:23:31.8609850Z ##[group]GITHUB_TOKEN Permissions
2025-06-23T17:23:31.8612719Z Contents: read
2025-06-23T17:23:31.8613807Z Metadata: read
2025-06-23T17:23:31.8614868Z Pages: write
2025-06-23T17:23:31.8615916Z ##[endgroup]
2025-06-23T17:23:31.8618946Z Secret source: Actions
2025-06-23T17:23:31.8620242Z Prepare workflow directory
2025-06-23T17:23:31.9119137Z Prepare all required actions
2025-06-23T17:23:31.9178679Z Getting action download info
2025-06-23T17:23:32.2330720Z ##[group]Download immutable action package 'actions/checkout@v4'
2025-06-23T17:23:32.2331756Z Version: 4.2.2
2025-06-23T17:23:32.2332719Z Digest: sha256:ccb2698953eaebd21c7bf6268a94f9c26518a7e38e27e0b83c1fe1ad049819b1
2025-06-23T17:23:32.2334028Z Source commit SHA: 11bd71901bbe5b1630ceea73d27597364c9af683
2025-06-23T17:23:32.2334714Z ##[endgroup]
2025-06-23T17:23:32.3408591Z ##[group]Download immutable action package 'actions/setup-node@v4'
2025-06-23T17:23:32.3409493Z Version: 4.4.0
2025-06-23T17:23:32.3410246Z Digest: sha256:9427cefe82346e992fb5b949e3569b39d537ae41aa3086483b14eceebfc16bc1
2025-06-23T17:23:32.3411204Z Source commit SHA: 49933ea5288caeca8642d1e84afbd3f7d6820020
2025-06-23T17:23:32.3411979Z ##[endgroup]
2025-06-23T17:23:32.4363952Z ##[group]Download immutable action package 'actions/configure-pages@v4'
2025-06-23T17:23:32.4364821Z Version: 4.0.0
2025-06-23T17:23:32.4365529Z Digest: sha256:95f920ee91072a3e9596eff2a708d14f0fefa72b4770cbf7902965dfc6b8de4c
2025-06-23T17:23:32.4366802Z Source commit SHA: 1f0c5cde4bc74cd7e1254d0cb4de8d49e9068c7d
2025-06-23T17:23:32.4367546Z ##[endgroup]
2025-06-23T17:23:32.6235718Z ##[group]Download immutable action package 'actions/upload-pages-artifact@v3'
2025-06-23T17:23:32.6236835Z Version: 3.0.1
2025-06-23T17:23:32.6237576Z Digest: sha256:aa65de5e734350e024ca30fe125144b6260e68160e01349fc79f7e321ec35490
2025-06-23T17:23:32.6238586Z Source commit SHA: 56afc609e74202658d3ffba0e8f6dda462b719fa
2025-06-23T17:23:32.6239318Z ##[endgroup]
2025-06-23T17:23:32.9200068Z Getting action download info
2025-06-23T17:23:33.1412252Z ##[group]Download immutable action package 'actions/upload-artifact@v4'
2025-06-23T17:23:33.1413140Z Version: 4.6.2
2025-06-23T17:23:33.1413897Z Digest: sha256:290722aa3281d5caf23d0acdc3dbeb3424786a1a01a9cc97e72f147225e37c38
2025-06-23T17:23:33.1414876Z Source commit SHA: ea165f8d65b6e75b540449e92b4886f43607fa02
2025-06-23T17:23:33.1415535Z ##[endgroup]
2025-06-23T17:23:33.2949327Z Complete job name: build
2025-06-23T17:23:33.3815719Z ##[group]Run actions/checkout@v4
2025-06-23T17:23:33.3817076Z with:
2025-06-23T17:23:33.3817841Z   repository: Equilibretech/workflow-locked-v1
2025-06-23T17:23:33.3819109Z   token: ***
2025-06-23T17:23:33.3819781Z   ssh-strict: true
2025-06-23T17:23:33.3820475Z   ssh-user: git
2025-06-23T17:23:33.3821207Z   persist-credentials: true
2025-06-23T17:23:33.3822004Z   clean: true
2025-06-23T17:23:33.3822743Z   sparse-checkout-cone-mode: true
2025-06-23T17:23:33.3823603Z   fetch-depth: 1
2025-06-23T17:23:33.3824285Z   fetch-tags: false
2025-06-23T17:23:33.3824994Z   show-progress: true
2025-06-23T17:23:33.3825704Z   lfs: false
2025-06-23T17:23:33.3826574Z   submodules: false
2025-06-23T17:23:33.3827490Z   set-safe-directory: true
2025-06-23T17:23:33.3828916Z ##[endgroup]
2025-06-23T17:23:33.6390391Z Syncing repository: Equilibretech/workflow-locked-v1
2025-06-23T17:23:33.6391954Z ##[group]Getting Git version info
2025-06-23T17:23:33.6392532Z Working directory is '/home/runner/work/workflow-locked-v1/workflow-locked-v1'
2025-06-23T17:23:33.6393189Z [command]/usr/bin/git version
2025-06-23T17:23:33.6477940Z git version 2.49.0
2025-06-23T17:23:33.6509481Z ##[endgroup]
2025-06-23T17:23:33.6531599Z Temporarily overriding HOME='/home/runner/work/_temp/caf3dfd9-cc9e-49eb-8b5e-00cfd9ac7ef0' before making global git config changes
2025-06-23T17:23:33.6532470Z Adding repository directory to the temporary git global config as a safe directory
2025-06-23T17:23:33.6539030Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-23T17:23:33.6582927Z Deleting the contents of '/home/runner/work/workflow-locked-v1/workflow-locked-v1'
2025-06-23T17:23:33.6587039Z ##[group]Initializing the repository
2025-06-23T17:23:33.6591968Z [command]/usr/bin/git init /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-23T17:23:33.6678810Z hint: Using 'master' as the name for the initial branch. This default branch name
2025-06-23T17:23:33.6679950Z hint: is subject to change. To configure the initial branch name to use in all
2025-06-23T17:23:33.6680509Z hint: of your new repositories, which will suppress this warning, call:
2025-06-23T17:23:33.6680885Z hint:
2025-06-23T17:23:33.6681179Z hint: 	git config --global init.defaultBranch <name>
2025-06-23T17:23:33.6681495Z hint:
2025-06-23T17:23:33.6681794Z hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
2025-06-23T17:23:33.6682281Z hint: 'development'. The just-created branch can be renamed via this command:
2025-06-23T17:23:33.6682690Z hint:
2025-06-23T17:23:33.6682906Z hint: 	git branch -m <name>
2025-06-23T17:23:33.6687274Z Initialized empty Git repository in /home/runner/work/workflow-locked-v1/workflow-locked-v1/.git/
2025-06-23T17:23:33.6700540Z [command]/usr/bin/git remote add origin https://github.com/Equilibretech/workflow-locked-v1
2025-06-23T17:23:33.6737373Z ##[endgroup]
2025-06-23T17:23:33.6738089Z ##[group]Disabling automatic garbage collection
2025-06-23T17:23:33.6742805Z [command]/usr/bin/git config --local gc.auto 0
2025-06-23T17:23:33.6773147Z ##[endgroup]
2025-06-23T17:23:33.6773871Z ##[group]Setting up auth
2025-06-23T17:23:33.6781527Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-06-23T17:23:33.6813818Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-06-23T17:23:33.7158213Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-06-23T17:23:33.7191217Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-06-23T17:23:33.7433504Z [command]/usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
2025-06-23T17:23:33.7482851Z ##[endgroup]
2025-06-23T17:23:33.7483506Z ##[group]Fetching the repository
2025-06-23T17:23:33.7493089Z [command]/usr/bin/git -c protocol.version=2 fetch --no-tags --prune --no-recurse-submodules --depth=1 origin +15679d42f4edb365b075ce40c8e5b38e352bdc7d:refs/remotes/origin/main
2025-06-23T17:23:34.1980832Z From https://github.com/Equilibretech/workflow-locked-v1
2025-06-23T17:23:34.1982621Z  * [new ref]         15679d42f4edb365b075ce40c8e5b38e352bdc7d -> origin/main
2025-06-23T17:23:34.2014824Z ##[endgroup]
2025-06-23T17:23:34.2015413Z ##[group]Determining the checkout info
2025-06-23T17:23:34.2018560Z ##[endgroup]
2025-06-23T17:23:34.2023603Z [command]/usr/bin/git sparse-checkout disable
2025-06-23T17:23:34.2070280Z [command]/usr/bin/git config --local --unset-all extensions.worktreeConfig
2025-06-23T17:23:34.2099490Z ##[group]Checking out the ref
2025-06-23T17:23:34.2104164Z [command]/usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
2025-06-23T17:23:34.2228874Z Switched to a new branch 'main'
2025-06-23T17:23:34.2229629Z branch 'main' set up to track 'origin/main'.
2025-06-23T17:23:34.2238595Z ##[endgroup]
2025-06-23T17:23:34.2282710Z [command]/usr/bin/git log -1 --format=%H
2025-06-23T17:23:34.2311431Z 15679d42f4edb365b075ce40c8e5b38e352bdc7d
2025-06-23T17:23:34.2553718Z ##[group]Run actions/setup-node@v4
2025-06-23T17:23:34.2554058Z with:
2025-06-23T17:23:34.2619144Z   node-version: 18
2025-06-23T17:23:34.2619430Z   cache: npm
2025-06-23T17:23:34.2619657Z   always-auth: false
2025-06-23T17:23:34.2619906Z   check-latest: false
2025-06-23T17:23:34.2620488Z   token: ***
2025-06-23T17:23:34.2620763Z ##[endgroup]
2025-06-23T17:23:34.4401632Z Found in cache @ /opt/hostedtoolcache/node/18.20.8/x64
2025-06-23T17:23:34.4403201Z ##[group]Environment details
2025-06-23T17:23:34.8344587Z node: v18.20.8
2025-06-23T17:23:34.8345008Z npm: 10.8.2
2025-06-23T17:23:34.8345283Z yarn: 1.22.22
2025-06-23T17:23:34.8346200Z ##[endgroup]
2025-06-23T17:23:34.8367906Z [command]/opt/hostedtoolcache/node/18.20.8/x64/bin/npm config get cache
2025-06-23T17:23:34.9703508Z /home/runner/.npm
2025-06-23T17:23:35.1424225Z Cache hit for: node-cache-Linux-x64-npm-f3f50d55e93d76ff4d1c5b25a8acd3ec42d979a16b6835d2742b72137442d957
2025-06-23T17:23:35.8739423Z Received 40084658 of 40084658 (100.0%), 65.1 MBs/sec
2025-06-23T17:23:35.8740108Z Cache Size: ~38 MB (40084658 B)
2025-06-23T17:23:35.8775334Z [command]/usr/bin/tar -xf /home/runner/work/_temp/e3fcb9be-a52e-42dd-896f-2af082dcab7f/cache.tzst -P -C /home/runner/work/workflow-locked-v1/workflow-locked-v1 --use-compress-program unzstd
2025-06-23T17:23:36.0014051Z Cache restored successfully
2025-06-23T17:23:36.0098928Z Cache restored from key: node-cache-Linux-x64-npm-f3f50d55e93d76ff4d1c5b25a8acd3ec42d979a16b6835d2742b72137442d957
2025-06-23T17:23:36.0268121Z ##[group]Run npm ci
2025-06-23T17:23:36.0268462Z [36;1mnpm ci[0m
2025-06-23T17:23:36.0373872Z shell: /usr/bin/bash -e {0}
2025-06-23T17:23:36.0374232Z ##[endgroup]
2025-06-23T17:23:38.1886107Z 
2025-06-23T17:23:38.1891852Z > workflow-locked-v1@1.0.0 prepare
2025-06-23T17:23:38.1892255Z > husky install
2025-06-23T17:23:38.1892399Z 
2025-06-23T17:23:38.2284379Z husky - install command is DEPRECATED
2025-06-23T17:23:38.2455767Z 
2025-06-23T17:23:38.2456726Z added 230 packages, and audited 231 packages in 2s
2025-06-23T17:23:38.2457217Z 
2025-06-23T17:23:38.2457503Z 58 packages are looking for funding
2025-06-23T17:23:38.2457998Z   run `npm fund` for details
2025-06-23T17:23:38.2468578Z 
2025-06-23T17:23:38.2468811Z found 0 vulnerabilities
2025-06-23T17:23:38.2685139Z ##[group]Run cd docs && npm ci
2025-06-23T17:23:38.2685476Z [36;1mcd docs && npm ci[0m
2025-06-23T17:23:38.2745213Z shell: /usr/bin/bash -e {0}
2025-06-23T17:23:38.2745470Z ##[endgroup]
2025-06-23T17:23:41.4661332Z 
2025-06-23T17:23:41.4665597Z added 205 packages, and audited 206 packages in 3s
2025-06-23T17:23:41.4673176Z 
2025-06-23T17:23:41.4677681Z 42 packages are looking for funding
2025-06-23T17:23:41.4682235Z   run `npm fund` for details
2025-06-23T17:23:41.4697140Z 
2025-06-23T17:23:41.4697607Z found 0 vulnerabilities
2025-06-23T17:23:41.5033146Z ##[group]Run npm run docs:build
2025-06-23T17:23:41.5033627Z [36;1mnpm run docs:build[0m
2025-06-23T17:23:41.5125016Z shell: /usr/bin/bash -e {0}
2025-06-23T17:23:41.5125433Z ##[endgroup]
2025-06-23T17:23:41.6589974Z 
2025-06-23T17:23:41.6591652Z > workflow-locked-v1@1.0.0 docs:build
2025-06-23T17:23:41.6592308Z > vite build --config docs/vite.config.ts
2025-06-23T17:23:41.6592633Z 
2025-06-23T17:23:41.9708004Z [36mvite v6.3.5 [32mbuilding for production...[36m[39m
2025-06-23T17:23:42.0108918Z [32m✓[39m 0 modules transformed.
2025-06-23T17:23:42.0128900Z [31m✗[39m Build failed in 10ms
2025-06-23T17:23:42.0129854Z [31merror during build:
2025-06-23T17:23:42.0131000Z [31mCould not resolve entry module "index.html".[31m
2025-06-23T17:23:42.0132233Z     at getRollupError (file:///home/runner/work/workflow-locked-v1/workflow-locked-v1/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
2025-06-23T17:23:42.0133972Z     at error (file:///home/runner/work/workflow-locked-v1/workflow-locked-v1/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
2025-06-23T17:23:42.0135758Z     at ModuleLoader.loadEntryModule (file:///home/runner/work/workflow-locked-v1/workflow-locked-v1/node_modules/rollup/dist/es/shared/node-entry.js:21444:20)
2025-06-23T17:23:42.0137286Z     at async Promise.all (index 0)[39m
2025-06-23T17:23:42.0302158Z ##[error]Process completed with exit code 1.
2025-06-23T17:23:42.0411470Z Post job cleanup.
2025-06-23T17:23:42.1424700Z [command]/usr/bin/git version
2025-06-23T17:23:42.1469420Z git version 2.49.0
2025-06-23T17:23:42.1516107Z Temporarily overriding HOME='/home/runner/work/_temp/61a24a14-fcc5-4ea6-bb6a-f05a8b462b33' before making global git config changes
2025-06-23T17:23:42.1517695Z Adding repository directory to the temporary git global config as a safe directory
2025-06-23T17:23:42.1531114Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-23T17:23:42.1571966Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-06-23T17:23:42.1613544Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-06-23T17:23:42.1891585Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-06-23T17:23:42.1918048Z http.https://github.com/.extraheader
2025-06-23T17:23:42.1934088Z [command]/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
2025-06-23T17:23:42.1969952Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-06-23T17:23:42.2322029Z Cleaning up orphan processes
