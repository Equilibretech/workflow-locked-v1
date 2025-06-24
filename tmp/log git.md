2025-06-24T00:01:15.6388053Z Current runner version: '2.325.0'
2025-06-24T00:01:15.6412102Z ##[group]Operating System
2025-06-24T00:01:15.6412950Z Ubuntu
2025-06-24T00:01:15.6413465Z 24.04.2
2025-06-24T00:01:15.6413900Z LTS
2025-06-24T00:01:15.6414818Z ##[endgroup]
2025-06-24T00:01:15.6415341Z ##[group]Runner Image
2025-06-24T00:01:15.6415953Z Image: ubuntu-24.04
2025-06-24T00:01:15.6416428Z Version: 20250622.1.0
2025-06-24T00:01:15.6417525Z Included Software: https://github.com/actions/runner-images/blob/ubuntu24/20250622.1/images/ubuntu/Ubuntu2404-Readme.md
2025-06-24T00:01:15.6418882Z Image Release: https://github.com/actions/runner-images/releases/tag/ubuntu24%2F20250622.1
2025-06-24T00:01:15.6419718Z ##[endgroup]
2025-06-24T00:01:15.6420285Z ##[group]Runner Image Provisioner
2025-06-24T00:01:15.6420844Z 2.0.437.1
2025-06-24T00:01:15.6421276Z ##[endgroup]
2025-06-24T00:01:15.6422276Z ##[group]GITHUB_TOKEN Permissions
2025-06-24T00:01:15.6423982Z Contents: read
2025-06-24T00:01:15.6424889Z Metadata: read
2025-06-24T00:01:15.6425586Z ##[endgroup]
2025-06-24T00:01:15.6427701Z Secret source: Actions
2025-06-24T00:01:15.6428356Z Prepare workflow directory
2025-06-24T00:01:15.6759270Z Prepare all required actions
2025-06-24T00:01:15.6799379Z Getting action download info
2025-06-24T00:01:16.0454999Z ##[group]Download immutable action package 'actions/checkout@v3'
2025-06-24T00:01:16.0456211Z Version: 3.6.0
2025-06-24T00:01:16.0457231Z Digest: sha256:942562b9c7d4b1f2557f1da21f4d3eb4eb4fd01f2ad78b2a6e187d1b193e0a0f
2025-06-24T00:01:16.0458391Z Source commit SHA: f43a0e5ff2bd294095638e18286ca9a3d1956744
2025-06-24T00:01:16.0459191Z ##[endgroup]
2025-06-24T00:01:16.1282939Z ##[group]Download immutable action package 'actions/setup-node@v3'
2025-06-24T00:01:16.1283698Z Version: 3.9.1
2025-06-24T00:01:16.1284733Z Digest: sha256:d8c8dbd6e63927801f9de42620f961a361b03be6034dcc11e83ca01f50cb9f40
2025-06-24T00:01:16.1285817Z Source commit SHA: 3235b876344d2a9aa001b8d1453c930bba69e610
2025-06-24T00:01:16.1286494Z ##[endgroup]
2025-06-24T00:01:16.6098478Z Complete job name: quality-gates
2025-06-24T00:01:16.6769856Z ##[group]Run actions/checkout@v3
2025-06-24T00:01:16.6770649Z with:
2025-06-24T00:01:16.6771080Z   repository: Equilibretech/workflow-locked-v1
2025-06-24T00:01:16.6771742Z   token: ***
2025-06-24T00:01:16.6772111Z   ssh-strict: true
2025-06-24T00:01:16.6772502Z   persist-credentials: true
2025-06-24T00:01:16.6772924Z   clean: true
2025-06-24T00:01:16.6773298Z   sparse-checkout-cone-mode: true
2025-06-24T00:01:16.6773755Z   fetch-depth: 1
2025-06-24T00:01:16.6774293Z   fetch-tags: false
2025-06-24T00:01:16.6774682Z   lfs: false
2025-06-24T00:01:16.6775035Z   submodules: false
2025-06-24T00:01:16.6775413Z   set-safe-directory: true
2025-06-24T00:01:16.6776064Z ##[endgroup]
2025-06-24T00:01:16.8236186Z Syncing repository: Equilibretech/workflow-locked-v1
2025-06-24T00:01:16.8239113Z ##[group]Getting Git version info
2025-06-24T00:01:16.8240663Z Working directory is '/home/runner/work/workflow-locked-v1/workflow-locked-v1'
2025-06-24T00:01:16.8242766Z [command]/usr/bin/git version
2025-06-24T00:01:16.8275609Z git version 2.49.0
2025-06-24T00:01:16.8305433Z ##[endgroup]
2025-06-24T00:01:16.8322429Z Temporarily overriding HOME='/home/runner/work/_temp/72a08027-4971-4b20-a13b-7d1bbf698ad1' before making global git config changes
2025-06-24T00:01:16.8324977Z Adding repository directory to the temporary git global config as a safe directory
2025-06-24T00:01:16.8327122Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-24T00:01:16.8359092Z Deleting the contents of '/home/runner/work/workflow-locked-v1/workflow-locked-v1'
2025-06-24T00:01:16.8362757Z ##[group]Initializing the repository
2025-06-24T00:01:16.8366917Z [command]/usr/bin/git init /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-24T00:01:16.8425502Z hint: Using 'master' as the name for the initial branch. This default branch name
2025-06-24T00:01:16.8427174Z hint: is subject to change. To configure the initial branch name to use in all
2025-06-24T00:01:16.8428917Z hint: of your new repositories, which will suppress this warning, call:
2025-06-24T00:01:16.8430110Z hint:
2025-06-24T00:01:16.8430734Z hint: 	git config --global init.defaultBranch <name>
2025-06-24T00:01:16.8431473Z hint:
2025-06-24T00:01:16.8432437Z hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
2025-06-24T00:01:16.8434033Z hint: 'development'. The just-created branch can be renamed via this command:
2025-06-24T00:01:16.8435504Z hint:
2025-06-24T00:01:16.8436199Z hint: 	git branch -m <name>
2025-06-24T00:01:16.8437654Z Initialized empty Git repository in /home/runner/work/workflow-locked-v1/workflow-locked-v1/.git/
2025-06-24T00:01:16.8441754Z [command]/usr/bin/git remote add origin https://github.com/Equilibretech/workflow-locked-v1
2025-06-24T00:01:16.8474012Z ##[endgroup]
2025-06-24T00:01:16.8475389Z ##[group]Disabling automatic garbage collection
2025-06-24T00:01:16.8477550Z [command]/usr/bin/git config --local gc.auto 0
2025-06-24T00:01:16.8504426Z ##[endgroup]
2025-06-24T00:01:16.8505638Z ##[group]Setting up auth
2025-06-24T00:01:16.8510491Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-06-24T00:01:16.8538611Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-06-24T00:01:16.8812104Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-06-24T00:01:16.8839516Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-06-24T00:01:16.9055806Z [command]/usr/bin/git config --local http.https://github.com/.extraheader AUTHORIZATION: basic ***
2025-06-24T00:01:16.9088362Z ##[endgroup]
2025-06-24T00:01:16.9089436Z ##[group]Fetching the repository
2025-06-24T00:01:16.9096649Z [command]/usr/bin/git -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin +dbf49ff3a116f9f174dab38eb36ce5f7929bc27f:refs/remotes/origin/main
2025-06-24T00:01:17.4325452Z remote: Enumerating objects: 138, done.        
2025-06-24T00:01:17.4326919Z remote: Counting objects:   0% (1/138)        
2025-06-24T00:01:17.4328207Z remote: Counting objects:   1% (2/138)        
2025-06-24T00:01:17.4329553Z remote: Counting objects:   2% (3/138)        
2025-06-24T00:01:17.4330903Z remote: Counting objects:   3% (5/138)        
2025-06-24T00:01:17.4332151Z remote: Counting objects:   4% (6/138)        
2025-06-24T00:01:17.4333384Z remote: Counting objects:   5% (7/138)        
2025-06-24T00:01:17.4336424Z remote: Counting objects:   6% (9/138)        
2025-06-24T00:01:17.4337640Z remote: Counting objects:   7% (10/138)        
2025-06-24T00:01:17.4338757Z remote: Counting objects:   8% (12/138)        
2025-06-24T00:01:17.4339898Z remote: Counting objects:   9% (13/138)        
2025-06-24T00:01:17.4341039Z remote: Counting objects:  10% (14/138)        
2025-06-24T00:01:17.4342175Z remote: Counting objects:  11% (16/138)        
2025-06-24T00:01:17.4343216Z remote: Counting objects:  12% (17/138)        
2025-06-24T00:01:17.4344534Z remote: Counting objects:  13% (18/138)        
2025-06-24T00:01:17.4345717Z remote: Counting objects:  14% (20/138)        
2025-06-24T00:01:17.4346804Z remote: Counting objects:  15% (21/138)        
2025-06-24T00:01:17.4347872Z remote: Counting objects:  16% (23/138)        
2025-06-24T00:01:17.4348920Z remote: Counting objects:  17% (24/138)        
2025-06-24T00:01:17.4349963Z remote: Counting objects:  18% (25/138)        
2025-06-24T00:01:17.4351236Z remote: Counting objects:  19% (27/138)        
2025-06-24T00:01:17.4352267Z remote: Counting objects:  20% (28/138)        
2025-06-24T00:01:17.4353342Z remote: Counting objects:  21% (29/138)        
2025-06-24T00:01:17.4354563Z remote: Counting objects:  22% (31/138)        
2025-06-24T00:01:17.4356105Z remote: Counting objects:  23% (32/138)        
2025-06-24T00:01:17.4357215Z remote: Counting objects:  24% (34/138)        
2025-06-24T00:01:17.4358322Z remote: Counting objects:  25% (35/138)        
2025-06-24T00:01:17.4359466Z remote: Counting objects:  26% (36/138)        
2025-06-24T00:01:17.4360693Z remote: Counting objects:  27% (38/138)        
2025-06-24T00:01:17.4361969Z remote: Counting objects:  28% (39/138)        
2025-06-24T00:01:17.4363196Z remote: Counting objects:  29% (41/138)        
2025-06-24T00:01:17.4364598Z remote: Counting objects:  30% (42/138)        
2025-06-24T00:01:17.4365762Z remote: Counting objects:  31% (43/138)        
2025-06-24T00:01:17.4366952Z remote: Counting objects:  32% (45/138)        
2025-06-24T00:01:17.4368135Z remote: Counting objects:  33% (46/138)        
2025-06-24T00:01:17.4369270Z remote: Counting objects:  34% (47/138)        
2025-06-24T00:01:17.4370535Z remote: Counting objects:  35% (49/138)        
2025-06-24T00:01:17.4371719Z remote: Counting objects:  36% (50/138)        
2025-06-24T00:01:17.4372912Z remote: Counting objects:  37% (52/138)        
2025-06-24T00:01:17.4374301Z remote: Counting objects:  38% (53/138)        
2025-06-24T00:01:17.4375527Z remote: Counting objects:  39% (54/138)        
2025-06-24T00:01:17.4376683Z remote: Counting objects:  40% (56/138)        
2025-06-24T00:01:17.4377915Z remote: Counting objects:  41% (57/138)        
2025-06-24T00:01:17.4379121Z remote: Counting objects:  42% (58/138)        
2025-06-24T00:01:17.4380253Z remote: Counting objects:  43% (60/138)        
2025-06-24T00:01:17.4381420Z remote: Counting objects:  44% (61/138)        
2025-06-24T00:01:17.4382579Z remote: Counting objects:  45% (63/138)        
2025-06-24T00:01:17.4383703Z remote: Counting objects:  46% (64/138)        
2025-06-24T00:01:17.4385123Z remote: Counting objects:  47% (65/138)        
2025-06-24T00:01:17.4386325Z remote: Counting objects:  48% (67/138)        
2025-06-24T00:01:17.4387797Z remote: Counting objects:  49% (68/138)        
2025-06-24T00:01:17.4389065Z remote: Counting objects:  50% (69/138)        
2025-06-24T00:01:17.4390260Z remote: Counting objects:  51% (71/138)        
2025-06-24T00:01:17.4391423Z remote: Counting objects:  52% (72/138)        
2025-06-24T00:01:17.4392574Z remote: Counting objects:  53% (74/138)        
2025-06-24T00:01:17.4393750Z remote: Counting objects:  54% (75/138)        
2025-06-24T00:01:17.4395125Z remote: Counting objects:  55% (76/138)        
2025-06-24T00:01:17.4396308Z remote: Counting objects:  56% (78/138)        
2025-06-24T00:01:17.4397573Z remote: Counting objects:  57% (79/138)        
2025-06-24T00:01:17.4398752Z remote: Counting objects:  58% (81/138)        
2025-06-24T00:01:17.4399909Z remote: Counting objects:  59% (82/138)        
2025-06-24T00:01:17.4401084Z remote: Counting objects:  60% (83/138)        
2025-06-24T00:01:17.4402252Z remote: Counting objects:  61% (85/138)        
2025-06-24T00:01:17.4403450Z remote: Counting objects:  62% (86/138)        
2025-06-24T00:01:17.4404831Z remote: Counting objects:  63% (87/138)        
2025-06-24T00:01:17.4405965Z remote: Counting objects:  64% (89/138)        
2025-06-24T00:01:17.4407071Z remote: Counting objects:  65% (90/138)        
2025-06-24T00:01:17.4408163Z remote: Counting objects:  66% (92/138)        
2025-06-24T00:01:17.4409279Z remote: Counting objects:  67% (93/138)        
2025-06-24T00:01:17.4410386Z remote: Counting objects:  68% (94/138)        
2025-06-24T00:01:17.4411514Z remote: Counting objects:  69% (96/138)        
2025-06-24T00:01:17.4412635Z remote: Counting objects:  70% (97/138)        
2025-06-24T00:01:17.4413739Z remote: Counting objects:  71% (98/138)        
2025-06-24T00:01:17.4414984Z remote: Counting objects:  72% (100/138)        
2025-06-24T00:01:17.4416064Z remote: Counting objects:  73% (101/138)        
2025-06-24T00:01:17.4417170Z remote: Counting objects:  74% (103/138)        
2025-06-24T00:01:17.4418405Z remote: Counting objects:  75% (104/138)        
2025-06-24T00:01:17.4419769Z remote: Counting objects:  76% (105/138)        
2025-06-24T00:01:17.4420863Z remote: Counting objects:  77% (107/138)        
2025-06-24T00:01:17.4421937Z remote: Counting objects:  78% (108/138)        
2025-06-24T00:01:17.4423061Z remote: Counting objects:  79% (110/138)        
2025-06-24T00:01:17.4424376Z remote: Counting objects:  80% (111/138)        
2025-06-24T00:01:17.4425522Z remote: Counting objects:  81% (112/138)        
2025-06-24T00:01:17.4426589Z remote: Counting objects:  82% (114/138)        
2025-06-24T00:01:17.4427640Z remote: Counting objects:  83% (115/138)        
2025-06-24T00:01:17.4428699Z remote: Counting objects:  84% (116/138)        
2025-06-24T00:01:17.4429762Z remote: Counting objects:  85% (118/138)        
2025-06-24T00:01:17.4430846Z remote: Counting objects:  86% (119/138)        
2025-06-24T00:01:17.4431900Z remote: Counting objects:  87% (121/138)        
2025-06-24T00:01:17.4432975Z remote: Counting objects:  88% (122/138)        
2025-06-24T00:01:17.4434274Z remote: Counting objects:  89% (123/138)        
2025-06-24T00:01:17.4435366Z remote: Counting objects:  90% (125/138)        
2025-06-24T00:01:17.4436414Z remote: Counting objects:  91% (126/138)        
2025-06-24T00:01:17.4437420Z remote: Counting objects:  92% (127/138)        
2025-06-24T00:01:17.4438471Z remote: Counting objects:  93% (129/138)        
2025-06-24T00:01:17.4439575Z remote: Counting objects:  94% (130/138)        
2025-06-24T00:01:17.4440649Z remote: Counting objects:  95% (132/138)        
2025-06-24T00:01:17.4441737Z remote: Counting objects:  96% (133/138)        
2025-06-24T00:01:17.4442789Z remote: Counting objects:  97% (134/138)        
2025-06-24T00:01:17.4443897Z remote: Counting objects:  98% (136/138)        
2025-06-24T00:01:17.4445220Z remote: Counting objects:  99% (137/138)        
2025-06-24T00:01:17.4446707Z remote: Counting objects: 100% (138/138)        
2025-06-24T00:01:17.4447885Z remote: Counting objects: 100% (138/138), done.        
2025-06-24T00:01:17.4449397Z remote: Compressing objects:   0% (1/120)        
2025-06-24T00:01:17.4450577Z remote: Compressing objects:   1% (2/120)        
2025-06-24T00:01:17.4451706Z remote: Compressing objects:   2% (3/120)        
2025-06-24T00:01:17.4452825Z remote: Compressing objects:   3% (4/120)        
2025-06-24T00:01:17.4453975Z remote: Compressing objects:   4% (5/120)        
2025-06-24T00:01:17.4455340Z remote: Compressing objects:   5% (6/120)        
2025-06-24T00:01:17.4689336Z remote: Compressing objects:   6% (8/120)        
2025-06-24T00:01:17.4690985Z remote: Compressing objects:   7% (9/120)        
2025-06-24T00:01:17.4691965Z remote: Compressing objects:   8% (10/120)        
2025-06-24T00:01:17.4692841Z remote: Compressing objects:   9% (11/120)        
2025-06-24T00:01:17.4693693Z remote: Compressing objects:  10% (12/120)        
2025-06-24T00:01:17.4695087Z remote: Compressing objects:  11% (14/120)        
2025-06-24T00:01:17.4695961Z remote: Compressing objects:  12% (15/120)        
2025-06-24T00:01:17.4696823Z remote: Compressing objects:  13% (16/120)        
2025-06-24T00:01:17.4697665Z remote: Compressing objects:  14% (17/120)        
2025-06-24T00:01:17.4698510Z remote: Compressing objects:  15% (18/120)        
2025-06-24T00:01:17.4699340Z remote: Compressing objects:  16% (20/120)        
2025-06-24T00:01:17.4700239Z remote: Compressing objects:  17% (21/120)        
2025-06-24T00:01:17.4701176Z remote: Compressing objects:  18% (22/120)        
2025-06-24T00:01:17.4702096Z remote: Compressing objects:  19% (23/120)        
2025-06-24T00:01:17.4703008Z remote: Compressing objects:  20% (24/120)        
2025-06-24T00:01:17.4703991Z remote: Compressing objects:  21% (26/120)        
2025-06-24T00:01:17.4705219Z remote: Compressing objects:  22% (27/120)        
2025-06-24T00:01:17.4706228Z remote: Compressing objects:  23% (28/120)        
2025-06-24T00:01:17.4707258Z remote: Compressing objects:  24% (29/120)        
2025-06-24T00:01:17.4708269Z remote: Compressing objects:  25% (30/120)        
2025-06-24T00:01:17.4709495Z remote: Compressing objects:  26% (32/120)        
2025-06-24T00:01:17.4710512Z remote: Compressing objects:  27% (33/120)        
2025-06-24T00:01:17.4711660Z remote: Compressing objects:  28% (34/120)        
2025-06-24T00:01:17.4713326Z remote: Compressing objects:  29% (35/120)        
2025-06-24T00:01:17.4715034Z remote: Compressing objects:  30% (36/120)        
2025-06-24T00:01:17.4716105Z remote: Compressing objects:  31% (38/120)        
2025-06-24T00:01:17.4717229Z remote: Compressing objects:  32% (39/120)        
2025-06-24T00:01:17.4718449Z remote: Compressing objects:  33% (40/120)        
2025-06-24T00:01:17.4719668Z remote: Compressing objects:  34% (41/120)        
2025-06-24T00:01:17.4720887Z remote: Compressing objects:  35% (42/120)        
2025-06-24T00:01:17.4722133Z remote: Compressing objects:  36% (44/120)        
2025-06-24T00:01:17.4723432Z remote: Compressing objects:  37% (45/120)        
2025-06-24T00:01:17.4724916Z remote: Compressing objects:  38% (46/120)        
2025-06-24T00:01:17.4726221Z remote: Compressing objects:  39% (47/120)        
2025-06-24T00:01:17.4727518Z remote: Compressing objects:  40% (48/120)        
2025-06-24T00:01:17.4728806Z remote: Compressing objects:  41% (50/120)        
2025-06-24T00:01:17.4730096Z remote: Compressing objects:  42% (51/120)        
2025-06-24T00:01:17.4731419Z remote: Compressing objects:  43% (52/120)        
2025-06-24T00:01:17.4732794Z remote: Compressing objects:  44% (53/120)        
2025-06-24T00:01:17.4734385Z remote: Compressing objects:  45% (54/120)        
2025-06-24T00:01:17.4735818Z remote: Compressing objects:  46% (56/120)        
2025-06-24T00:01:17.4737231Z remote: Compressing objects:  47% (57/120)        
2025-06-24T00:01:17.4738643Z remote: Compressing objects:  48% (58/120)        
2025-06-24T00:01:17.4740085Z remote: Compressing objects:  49% (59/120)        
2025-06-24T00:01:17.4741493Z remote: Compressing objects:  50% (60/120)        
2025-06-24T00:01:17.4743045Z remote: Compressing objects:  51% (62/120)        
2025-06-24T00:01:17.4744639Z remote: Compressing objects:  52% (63/120)        
2025-06-24T00:01:17.4746057Z remote: Compressing objects:  53% (64/120)        
2025-06-24T00:01:17.4747472Z remote: Compressing objects:  54% (65/120)        
2025-06-24T00:01:17.4748916Z remote: Compressing objects:  55% (66/120)        
2025-06-24T00:01:17.4750320Z remote: Compressing objects:  56% (68/120)        
2025-06-24T00:01:17.4751711Z remote: Compressing objects:  57% (69/120)        
2025-06-24T00:01:17.4753092Z remote: Compressing objects:  58% (70/120)        
2025-06-24T00:01:17.4754623Z remote: Compressing objects:  59% (71/120)        
2025-06-24T00:01:17.4755973Z remote: Compressing objects:  60% (72/120)        
2025-06-24T00:01:17.4757349Z remote: Compressing objects:  61% (74/120)        
2025-06-24T00:01:17.4758740Z remote: Compressing objects:  62% (75/120)        
2025-06-24T00:01:17.4760103Z remote: Compressing objects:  63% (76/120)        
2025-06-24T00:01:17.4761491Z remote: Compressing objects:  64% (77/120)        
2025-06-24T00:01:17.4763113Z remote: Compressing objects:  65% (78/120)        
2025-06-24T00:01:17.4764711Z remote: Compressing objects:  66% (80/120)        
2025-06-24T00:01:17.4766031Z remote: Compressing objects:  67% (81/120)        
2025-06-24T00:01:17.4767346Z remote: Compressing objects:  68% (82/120)        
2025-06-24T00:01:17.4768641Z remote: Compressing objects:  69% (83/120)        
2025-06-24T00:01:17.4769961Z remote: Compressing objects:  70% (84/120)        
2025-06-24T00:01:17.4771282Z remote: Compressing objects:  71% (86/120)        
2025-06-24T00:01:17.4772620Z remote: Compressing objects:  72% (87/120)        
2025-06-24T00:01:17.4773965Z remote: Compressing objects:  73% (88/120)        
2025-06-24T00:01:17.4775523Z remote: Compressing objects:  74% (89/120)        
2025-06-24T00:01:17.4776860Z remote: Compressing objects:  75% (90/120)        
2025-06-24T00:01:17.4778203Z remote: Compressing objects:  76% (92/120)        
2025-06-24T00:01:17.4779741Z remote: Compressing objects:  77% (93/120)        
2025-06-24T00:01:17.4781097Z remote: Compressing objects:  78% (94/120)        
2025-06-24T00:01:17.4782446Z remote: Compressing objects:  79% (95/120)        
2025-06-24T00:01:17.4783777Z remote: Compressing objects:  80% (96/120)        
2025-06-24T00:01:17.4785287Z remote: Compressing objects:  81% (98/120)        
2025-06-24T00:01:17.4786617Z remote: Compressing objects:  82% (99/120)        
2025-06-24T00:01:17.4787927Z remote: Compressing objects:  83% (100/120)        
2025-06-24T00:01:17.4789267Z remote: Compressing objects:  84% (101/120)        
2025-06-24T00:01:17.4790591Z remote: Compressing objects:  85% (102/120)        
2025-06-24T00:01:17.4791930Z remote: Compressing objects:  86% (104/120)        
2025-06-24T00:01:17.4793366Z remote: Compressing objects:  87% (105/120)        
2025-06-24T00:01:17.4794912Z remote: Compressing objects:  88% (106/120)        
2025-06-24T00:01:17.4796229Z remote: Compressing objects:  89% (107/120)        
2025-06-24T00:01:17.4797561Z remote: Compressing objects:  90% (108/120)        
2025-06-24T00:01:17.4798859Z remote: Compressing objects:  91% (110/120)        
2025-06-24T00:01:17.4800166Z remote: Compressing objects:  92% (111/120)        
2025-06-24T00:01:17.4801487Z remote: Compressing objects:  93% (112/120)        
2025-06-24T00:01:17.4802816Z remote: Compressing objects:  94% (113/120)        
2025-06-24T00:01:17.4804324Z remote: Compressing objects:  95% (114/120)        
2025-06-24T00:01:17.4805642Z remote: Compressing objects:  96% (116/120)        
2025-06-24T00:01:17.4806949Z remote: Compressing objects:  97% (117/120)        
2025-06-24T00:01:17.4808280Z remote: Compressing objects:  98% (118/120)        
2025-06-24T00:01:17.4809606Z remote: Compressing objects:  99% (119/120)        
2025-06-24T00:01:17.4810909Z remote: Compressing objects: 100% (120/120)        
2025-06-24T00:01:17.4812346Z remote: Compressing objects: 100% (120/120), done.        
2025-06-24T00:01:17.4841592Z Receiving objects:   0% (1/138)
2025-06-24T00:01:17.4843247Z Receiving objects:   1% (2/138)
2025-06-24T00:01:17.4844987Z Receiving objects:   2% (3/138)
2025-06-24T00:01:17.4846399Z Receiving objects:   3% (5/138)
2025-06-24T00:01:17.4847391Z Receiving objects:   4% (6/138)
2025-06-24T00:01:17.5184705Z Receiving objects:   5% (7/138)
2025-06-24T00:01:17.5186513Z Receiving objects:   6% (9/138)
2025-06-24T00:01:17.5207273Z Receiving objects:   7% (10/138)
2025-06-24T00:01:17.5208926Z Receiving objects:   8% (12/138)
2025-06-24T00:01:17.5210001Z Receiving objects:   9% (13/138)
2025-06-24T00:01:17.5210988Z Receiving objects:  10% (14/138)
2025-06-24T00:01:17.5211972Z Receiving objects:  11% (16/138)
2025-06-24T00:01:17.5212933Z Receiving objects:  12% (17/138)
2025-06-24T00:01:17.5213892Z Receiving objects:  13% (18/138)
2025-06-24T00:01:17.5314542Z Receiving objects:  14% (20/138)
2025-06-24T00:01:17.5319248Z Receiving objects:  15% (21/138)
2025-06-24T00:01:17.5321276Z Receiving objects:  16% (23/138)
2025-06-24T00:01:17.5322840Z Receiving objects:  17% (24/138)
2025-06-24T00:01:17.5324562Z Receiving objects:  18% (25/138)
2025-06-24T00:01:17.5326133Z Receiving objects:  19% (27/138)
2025-06-24T00:01:17.5327688Z Receiving objects:  20% (28/138)
2025-06-24T00:01:17.5329268Z Receiving objects:  21% (29/138)
2025-06-24T00:01:17.5330835Z Receiving objects:  22% (31/138)
2025-06-24T00:01:17.5332388Z Receiving objects:  23% (32/138)
2025-06-24T00:01:17.5333599Z Receiving objects:  24% (34/138)
2025-06-24T00:01:17.5334826Z Receiving objects:  25% (35/138)
2025-06-24T00:01:17.5335799Z Receiving objects:  26% (36/138)
2025-06-24T00:01:17.5336756Z Receiving objects:  27% (38/138)
2025-06-24T00:01:17.5337725Z Receiving objects:  28% (39/138)
2025-06-24T00:01:17.5338678Z Receiving objects:  29% (41/138)
2025-06-24T00:01:17.5339642Z Receiving objects:  30% (42/138)
2025-06-24T00:01:17.5340610Z Receiving objects:  31% (43/138)
2025-06-24T00:01:17.5341577Z Receiving objects:  32% (45/138)
2025-06-24T00:01:17.5342525Z Receiving objects:  33% (46/138)
2025-06-24T00:01:17.5343668Z Receiving objects:  34% (47/138)
2025-06-24T00:01:17.5818935Z Receiving objects:  35% (49/138)
2025-06-24T00:01:17.5820548Z Receiving objects:  36% (50/138)
2025-06-24T00:01:17.5822086Z Receiving objects:  37% (52/138)
2025-06-24T00:01:17.5823620Z Receiving objects:  38% (53/138)
2025-06-24T00:01:17.5825400Z Receiving objects:  39% (54/138)
2025-06-24T00:01:17.5826968Z Receiving objects:  40% (56/138)
2025-06-24T00:01:17.5828479Z Receiving objects:  41% (57/138)
2025-06-24T00:01:17.5829989Z Receiving objects:  42% (58/138)
2025-06-24T00:01:17.6303309Z Receiving objects:  43% (60/138)
2025-06-24T00:01:17.6307370Z remote: Total 138 (delta 13), reused 99 (delta 2), pack-reused 0 (from 0)        
2025-06-24T00:01:17.6309865Z Receiving objects:  44% (61/138)
2025-06-24T00:01:17.6311464Z Receiving objects:  45% (63/138)
2025-06-24T00:01:17.6313019Z Receiving objects:  46% (64/138)
2025-06-24T00:01:17.6314759Z Receiving objects:  47% (65/138)
2025-06-24T00:01:17.6316343Z Receiving objects:  48% (67/138)
2025-06-24T00:01:17.6317979Z Receiving objects:  49% (68/138)
2025-06-24T00:01:17.6319505Z Receiving objects:  50% (69/138)
2025-06-24T00:01:17.6321076Z Receiving objects:  51% (71/138)
2025-06-24T00:01:17.6322610Z Receiving objects:  52% (72/138)
2025-06-24T00:01:17.6324308Z Receiving objects:  53% (74/138)
2025-06-24T00:01:17.6325830Z Receiving objects:  54% (75/138)
2025-06-24T00:01:17.6327359Z Receiving objects:  55% (76/138)
2025-06-24T00:01:17.6328908Z Receiving objects:  56% (78/138)
2025-06-24T00:01:17.6330428Z Receiving objects:  57% (79/138)
2025-06-24T00:01:17.6331957Z Receiving objects:  58% (81/138)
2025-06-24T00:01:17.6333472Z Receiving objects:  59% (82/138)
2025-06-24T00:01:17.6335268Z Receiving objects:  60% (83/138)
2025-06-24T00:01:17.6336850Z Receiving objects:  61% (85/138)
2025-06-24T00:01:17.6338370Z Receiving objects:  62% (86/138)
2025-06-24T00:01:17.6339852Z Receiving objects:  63% (87/138)
2025-06-24T00:01:17.6341343Z Receiving objects:  64% (89/138)
2025-06-24T00:01:17.6343075Z Receiving objects:  65% (90/138)
2025-06-24T00:01:17.6344821Z Receiving objects:  66% (92/138)
2025-06-24T00:01:17.6346314Z Receiving objects:  67% (93/138)
2025-06-24T00:01:17.6347791Z Receiving objects:  68% (94/138)
2025-06-24T00:01:17.6349276Z Receiving objects:  69% (96/138)
2025-06-24T00:01:17.6350741Z Receiving objects:  70% (97/138)
2025-06-24T00:01:17.6352256Z Receiving objects:  71% (98/138)
2025-06-24T00:01:17.6353774Z Receiving objects:  72% (100/138)
2025-06-24T00:01:17.6355471Z Receiving objects:  73% (101/138)
2025-06-24T00:01:17.6356999Z Receiving objects:  74% (103/138)
2025-06-24T00:01:17.6358531Z Receiving objects:  75% (104/138)
2025-06-24T00:01:17.6360111Z Receiving objects:  76% (105/138)
2025-06-24T00:01:17.6361601Z Receiving objects:  77% (107/138)
2025-06-24T00:01:17.6362580Z Receiving objects:  78% (108/138)
2025-06-24T00:01:17.6363575Z Receiving objects:  79% (110/138)
2025-06-24T00:01:17.6364930Z Receiving objects:  80% (111/138)
2025-06-24T00:01:17.6365960Z Receiving objects:  81% (112/138)
2025-06-24T00:01:17.6366907Z Receiving objects:  82% (114/138)
2025-06-24T00:01:17.6367866Z Receiving objects:  83% (115/138)
2025-06-24T00:01:17.6368825Z Receiving objects:  84% (116/138)
2025-06-24T00:01:17.6369778Z Receiving objects:  85% (118/138)
2025-06-24T00:01:17.6370715Z Receiving objects:  86% (119/138)
2025-06-24T00:01:17.6371664Z Receiving objects:  87% (121/138)
2025-06-24T00:01:17.6372603Z Receiving objects:  88% (122/138)
2025-06-24T00:01:17.6373557Z Receiving objects:  89% (123/138)
2025-06-24T00:01:17.6374725Z Receiving objects:  90% (125/138)
2025-06-24T00:01:17.6375681Z Receiving objects:  91% (126/138)
2025-06-24T00:01:17.6376631Z Receiving objects:  92% (127/138)
2025-06-24T00:01:17.6377573Z Receiving objects:  93% (129/138)
2025-06-24T00:01:17.6378527Z Receiving objects:  94% (130/138)
2025-06-24T00:01:17.6379474Z Receiving objects:  95% (132/138)
2025-06-24T00:01:17.6380411Z Receiving objects:  96% (133/138)
2025-06-24T00:01:17.6409781Z Receiving objects:  97% (134/138)
2025-06-24T00:01:17.6410759Z Receiving objects:  98% (136/138)
2025-06-24T00:01:17.6411962Z Receiving objects:  99% (137/138)
2025-06-24T00:01:17.6412905Z Receiving objects: 100% (138/138)
2025-06-24T00:01:17.6414361Z Receiving objects: 100% (138/138), 281.30 KiB | 1.84 MiB/s, done.
2025-06-24T00:01:17.6415683Z Resolving deltas:   0% (0/13)
2025-06-24T00:01:17.6416581Z Resolving deltas:   7% (1/13)
2025-06-24T00:01:17.6417476Z Resolving deltas:  15% (2/13)
2025-06-24T00:01:17.6418381Z Resolving deltas:  23% (3/13)
2025-06-24T00:01:17.6419268Z Resolving deltas:  30% (4/13)
2025-06-24T00:01:17.6420330Z Resolving deltas:  38% (5/13)
2025-06-24T00:01:17.6421558Z Resolving deltas:  46% (6/13)
2025-06-24T00:01:17.6422909Z Resolving deltas:  53% (7/13)
2025-06-24T00:01:17.6424434Z Resolving deltas:  61% (8/13)
2025-06-24T00:01:17.6425753Z Resolving deltas:  69% (9/13)
2025-06-24T00:01:17.6427079Z Resolving deltas:  76% (10/13)
2025-06-24T00:01:17.6428414Z Resolving deltas:  84% (11/13)
2025-06-24T00:01:17.6429760Z Resolving deltas:  92% (12/13)
2025-06-24T00:01:17.6431067Z Resolving deltas: 100% (13/13)
2025-06-24T00:01:17.6432388Z Resolving deltas: 100% (13/13), done.
2025-06-24T00:01:17.6487668Z From https://github.com/Equilibretech/workflow-locked-v1
2025-06-24T00:01:17.6489852Z  * [new ref]         dbf49ff3a116f9f174dab38eb36ce5f7929bc27f -> origin/main
2025-06-24T00:01:17.6519514Z ##[endgroup]
2025-06-24T00:01:17.6521513Z ##[group]Determining the checkout info
2025-06-24T00:01:17.6523432Z ##[endgroup]
2025-06-24T00:01:17.6525517Z ##[group]Checking out the ref
2025-06-24T00:01:17.6527809Z [command]/usr/bin/git checkout --progress --force -B main refs/remotes/origin/main
2025-06-24T00:01:17.6650193Z Switched to a new branch 'main'
2025-06-24T00:01:17.6653346Z branch 'main' set up to track 'origin/main'.
2025-06-24T00:01:17.6660340Z ##[endgroup]
2025-06-24T00:01:17.6691694Z [command]/usr/bin/git log -1 --format='%H'
2025-06-24T00:01:17.6712658Z 'dbf49ff3a116f9f174dab38eb36ce5f7929bc27f'
2025-06-24T00:01:17.7066594Z ##[group]Run actions/setup-node@v3
2025-06-24T00:01:17.7067550Z with:
2025-06-24T00:01:17.7068195Z   node-version: 18
2025-06-24T00:01:17.7068919Z   cache: npm
2025-06-24T00:01:17.7069609Z   always-auth: false
2025-06-24T00:01:17.7070369Z   check-latest: false
2025-06-24T00:01:17.7071374Z   token: ***
2025-06-24T00:01:17.7072050Z ##[endgroup]
2025-06-24T00:01:17.9048116Z Found in cache @ /opt/hostedtoolcache/node/18.20.8/x64
2025-06-24T00:01:17.9055922Z ##[group]Environment details
2025-06-24T00:01:18.2334761Z node: v18.20.8
2025-06-24T00:01:18.2336157Z npm: 10.8.2
2025-06-24T00:01:18.2337279Z yarn: 1.22.22
2025-06-24T00:01:18.2339662Z ##[endgroup]
2025-06-24T00:01:18.2348818Z [command]/opt/hostedtoolcache/node/18.20.8/x64/bin/npm config get cache
2025-06-24T00:01:18.3603733Z /home/runner/.npm
2025-06-24T00:01:18.6103601Z Cache hit for: node-cache-Linux-npm-f3f50d55e93d76ff4d1c5b25a8acd3ec42d979a16b6835d2742b72137442d957
2025-06-24T00:01:19.8547801Z Received 16831892 of 21026196 (80.1%), 16.0 MBs/sec
2025-06-24T00:01:20.0426372Z Received 21026196 of 21026196 (100.0%), 16.9 MBs/sec
2025-06-24T00:01:20.0428478Z Cache Size: ~20 MB (21026196 B)
2025-06-24T00:01:20.0458894Z [command]/usr/bin/tar -xf /home/runner/work/_temp/545b6ac1-ba65-4551-a556-ccd4dda2902f/cache.tzst -P -C /home/runner/work/workflow-locked-v1/workflow-locked-v1 --use-compress-program unzstd
2025-06-24T00:01:20.1280280Z Cache restored successfully
2025-06-24T00:01:20.1341745Z Cache restored from key: node-cache-Linux-npm-f3f50d55e93d76ff4d1c5b25a8acd3ec42d979a16b6835d2742b72137442d957
2025-06-24T00:01:20.1508960Z ##[group]Run npm ci
2025-06-24T00:01:20.1509253Z [36;1mnpm ci[0m
2025-06-24T00:01:20.1600008Z shell: /usr/bin/bash -e {0}
2025-06-24T00:01:20.1600298Z ##[endgroup]
2025-06-24T00:01:22.1386714Z 
2025-06-24T00:01:22.1392717Z > workflow-locked-v1@1.0.0 prepare
2025-06-24T00:01:22.1393190Z > husky install
2025-06-24T00:01:22.1393354Z 
2025-06-24T00:01:22.1777961Z husky - install command is DEPRECATED
2025-06-24T00:01:22.1932765Z 
2025-06-24T00:01:22.1933150Z added 230 packages, and audited 231 packages in 2s
2025-06-24T00:01:22.1933542Z 
2025-06-24T00:01:22.1934735Z 58 packages are looking for funding
2025-06-24T00:01:22.1935348Z   run `npm fund` for details
2025-06-24T00:01:22.1946114Z 
2025-06-24T00:01:22.1946489Z found 0 vulnerabilities
2025-06-24T00:01:22.2151212Z ##[group]Run cd docs && npm ci
2025-06-24T00:01:22.2151532Z [36;1mcd docs && npm ci[0m
2025-06-24T00:01:22.2211933Z shell: /usr/bin/bash -e {0}
2025-06-24T00:01:22.2212192Z ##[endgroup]
2025-06-24T00:01:25.6851310Z 
2025-06-24T00:01:25.6854794Z added 221 packages, and audited 222 packages in 3s
2025-06-24T00:01:25.6855294Z 
2025-06-24T00:01:25.6855565Z 44 packages are looking for funding
2025-06-24T00:01:25.6856023Z   run `npm fund` for details
2025-06-24T00:01:25.6865518Z 
2025-06-24T00:01:25.6866052Z found 0 vulnerabilities
2025-06-24T00:01:25.7094615Z ##[group]Run cd docs/wizard && npm ci
2025-06-24T00:01:25.7095115Z [36;1mcd docs/wizard && npm ci[0m
2025-06-24T00:01:25.7171155Z shell: /usr/bin/bash -e {0}
2025-06-24T00:01:25.7171532Z ##[endgroup]
2025-06-24T00:01:30.0971051Z 
2025-06-24T00:01:30.0971977Z added 426 packages, and audited 427 packages in 4s
2025-06-24T00:01:30.0972429Z 
2025-06-24T00:01:30.0972730Z 93 packages are looking for funding
2025-06-24T00:01:30.0973246Z   run `npm fund` for details
2025-06-24T00:01:30.0984243Z 
2025-06-24T00:01:30.0984573Z found 0 vulnerabilities
2025-06-24T00:01:30.1263817Z ##[group]Run npm run lint:check
2025-06-24T00:01:30.1264310Z [36;1mnpm run lint:check[0m
2025-06-24T00:01:30.1322744Z shell: /usr/bin/bash -e {0}
2025-06-24T00:01:30.1322998Z ##[endgroup]
2025-06-24T00:01:30.2571694Z 
2025-06-24T00:01:30.2572227Z > workflow-locked-v1@1.0.0 lint:check
2025-06-24T00:01:30.2572892Z > npm run lint -- --max-warnings=0
2025-06-24T00:01:30.2573229Z 
2025-06-24T00:01:30.3879904Z 
2025-06-24T00:01:30.3880309Z > workflow-locked-v1@1.0.0 lint
2025-06-24T00:01:30.3880852Z > eslint . --max-warnings=0
2025-06-24T00:01:30.3881054Z 
2025-06-24T00:01:30.7026599Z ##[group]Run npm run test:coverage
2025-06-24T00:01:30.7026917Z [36;1mnpm run test:coverage[0m
2025-06-24T00:01:30.7086334Z shell: /usr/bin/bash -e {0}
2025-06-24T00:01:30.7086576Z ##[endgroup]
2025-06-24T00:01:30.8328168Z 
2025-06-24T00:01:30.8328814Z > workflow-locked-v1@1.0.0 test:coverage
2025-06-24T00:01:30.8329432Z > vitest run --coverage
2025-06-24T00:01:30.8329692Z 
2025-06-24T00:01:31.2264894Z 
2025-06-24T00:01:31.2268409Z [1m[46m RUN [49m[22m [36mv3.2.4 [39m[90m/home/runner/work/workflow-locked-v1/workflow-locked-v1[39m
2025-06-24T00:01:31.2269147Z       [2mCoverage enabled with [22m[33mv8[39m
2025-06-24T00:01:31.2269384Z 
2025-06-24T00:01:32.0204828Z  [31m❯[39m docs/wizard/src/components/StepForm.test.tsx [2m([22m[2m11 tests[22m[2m | [22m[31m11 failed[39m[2m)[22m[32m 18[2mms[22m[39m
2025-06-24T00:01:32.0210324Z [31m   [31m×[31m StepForm[2m > [22mrenders step with text field[39m[32m 10[2mms[22m[39m
2025-06-24T00:01:32.0215395Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0216745Z [31m   [31m×[31m StepForm[2m > [22mhandles text input changes[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0218113Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0219394Z [31m   [31m×[31m StepForm[2m > [22mhandles textarea changes[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0220461Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0230991Z [31m   [31m×[31m StepForm[2m > [22mhandles radio button selection[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0232347Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0236699Z [31m   [31m×[31m StepForm[2m > [22mhandles checkbox selection[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0237615Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0238659Z [31m   [31m×[31m StepForm[2m > [22mhandles checkbox unchecking[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0239587Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0241154Z [31m   [31m×[31m StepForm[2m > [22mrenders auto step with tasks[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0242069Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0243155Z [31m   [31m×[31m StepForm[2m > [22mshows required field indicator[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0244064Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0245394Z [31m   [31m×[31m StepForm[2m > [22mhandles pre-filled form data[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0246278Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0247418Z [31m   [31m×[31m StepForm[2m > [22mhandles empty checkbox array correctly[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0248433Z [31m     → document is not defined[39m
2025-06-24T00:01:32.0249510Z [31m   [31m×[31m StepForm[2m > [22mshows recommended option badge[39m[32m 1[2mms[22m[39m
2025-06-24T00:01:32.0250449Z [31m     → document is not defined[39m
2025-06-24T00:01:32.2200054Z  [31m❯[39m docs/wizard/src/App.test.tsx [2m([22m[2m6 tests[22m[2m | [22m[31m6 failed[39m[2m)[22m[32m 12[2mms[22m[39m
2025-06-24T00:01:32.2214012Z [31m   [31m×[31m App[2m > [22mrenders the wizard in guided mode by default[39m[32m 8[2mms[22m[39m
2025-06-24T00:01:32.2215277Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.2216413Z [31m   [31m×[31m App[2m > [22mswitches between guided and expert mode[39m[32m 0[2mms[22m[39m
2025-06-24T00:01:32.2217391Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.2218614Z [31m   [31m×[31m App[2m > [22mvalidates required fields before allowing next step[39m[32m 0[2mms[22m[39m
2025-06-24T00:01:32.2219661Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.2220709Z [31m   [31m×[31m App[2m > [22msaves progress to localStorage[39m[32m 0[2mms[22m[39m
2025-06-24T00:01:32.2221626Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.2223130Z [31m   [31m×[31m App[2m > [22mloads saved progress from localStorage[39m[32m 0[2mms[22m[39m
2025-06-24T00:01:32.2224341Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.2225309Z [31m   [31m×[31m App[2m > [22mnavigates between steps[39m[32m 0[2mms[22m[39m
2025-06-24T00:01:32.2226191Z [31m     → localStorage is not defined[39m
2025-06-24T00:01:32.3056578Z  [32m✓[39m src/__tests__/guide.smoke.test.tsx [2m([22m[2m4 tests[22m[2m)[22m[32m 6[2mms[22m[39m
2025-06-24T00:01:32.3109203Z  [32m✓[39m docs/wizard/src/lib/utils.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 12[2mms[22m[39m
2025-06-24T00:01:32.4862679Z  [32m✓[39m tests/setup.test.js [2m([22m[2m2 tests[22m[2m)[22m[32m 3[2mms[22m[39m
2025-06-24T00:01:32.5365784Z 
2025-06-24T00:01:32.5367013Z [31m⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Suites 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m
2025-06-24T00:01:32.5373108Z 
2025-06-24T00:01:32.5375167Z [41m[1m FAIL [22m[49m docs/wizard/src/components/IAWorkbench.test.tsx[2m [ docs/wizard/src/components/IAWorkbench.test.tsx ][22m
2025-06-24T00:01:32.5392042Z [31m[1mReferenceError[22m: navigator is not defined[39m
2025-06-24T00:01:32.5393287Z [36m [2m❯[22m docs/wizard/src/components/IAWorkbench.test.tsx:[2m6:15[22m[39m
2025-06-24T00:01:32.5433020Z     [90m  4| [39m
2025-06-24T00:01:32.5434398Z     [90m  5| [39m[90m// Mock navigator.clipboard[39m
2025-06-24T00:01:32.5435594Z     [90m  6| [39m[33mObject[39m[33m.[39m[34massign[39m(navigator[33m,[39m {
2025-06-24T00:01:32.5437541Z     [90m   | [39m              [31m^[39m
2025-06-24T00:01:32.5438121Z     [90m  7| [39m  clipboard[33m:[39m {
2025-06-24T00:01:32.5438896Z     [90m  8| [39m    writeText[33m:[39m vi[33m.[39m[34mfn[39m()[33m,[39m
2025-06-24T00:01:32.5439326Z 
2025-06-24T00:01:32.5439742Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/18]⎯[22m[39m
2025-06-24T00:01:32.5440085Z 
2025-06-24T00:01:32.5441898Z 
2025-06-24T00:01:32.5442577Z [31m⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 17 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m
2025-06-24T00:01:32.5455358Z 
2025-06-24T00:01:32.5456354Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22mrenders the wizard in guided mode by default
2025-06-24T00:01:32.5457902Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22mswitches between guided and expert mode
2025-06-24T00:01:32.5459539Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22mvalidates required fields before allowing next step
2025-06-24T00:01:32.5461052Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22msaves progress to localStorage
2025-06-24T00:01:32.5462500Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22mloads saved progress from localStorage
2025-06-24T00:01:32.5463892Z [41m[1m FAIL [22m[49m docs/wizard/src/App.test.tsx[2m > [22mApp[2m > [22mnavigates between steps
2025-06-24T00:01:32.5465164Z [31m[1mReferenceError[22m: localStorage is not defined[39m
2025-06-24T00:01:32.5466103Z [36m [2m❯[22m docs/wizard/src/App.test.tsx:[2m7:5[22m[39m
2025-06-24T00:01:32.5496401Z     [90m  5| [39m[34mdescribe[39m([32m'App'[39m[33m,[39m () [33m=>[39m {
2025-06-24T00:01:32.5512830Z     [90m  6| [39m  [34mbeforeEach[39m(() [33m=>[39m {
2025-06-24T00:01:32.5513604Z     [90m  7| [39m    localStorage[33m.[39m[34mclear[39m()[33m;[39m
2025-06-24T00:01:32.5514375Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5515051Z     [90m  8| [39m    vi[33m.[39m[34mclearAllMocks[39m()[33m;[39m
2025-06-24T00:01:32.5515647Z     [90m  9| [39m  })[33m;[39m
2025-06-24T00:01:32.5515911Z 
2025-06-24T00:01:32.5544744Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/18]⎯[22m[39m
2025-06-24T00:01:32.5545110Z 
2025-06-24T00:01:32.5546205Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mrenders step with text field
2025-06-24T00:01:32.5547410Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5549072Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5550349Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m67:5[22m[39m
2025-06-24T00:01:32.5551078Z     [90m 65| [39m
2025-06-24T00:01:32.5595083Z     [90m 66| [39m  [34mit[39m([32m'renders step with text field'[39m[33m,[39m () [33m=>[39m {
2025-06-24T00:01:32.5596131Z     [90m 67| [39m    [34mrender[39m(
2025-06-24T00:01:32.5596867Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5597619Z     [90m 68| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5598636Z     [90m 69| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5599236Z 
2025-06-24T00:01:32.5599747Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/18]⎯[22m[39m
2025-06-24T00:01:32.5600250Z 
2025-06-24T00:01:32.5601548Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles text input changes
2025-06-24T00:01:32.5602929Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5605761Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5618729Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m82:5[22m[39m
2025-06-24T00:01:32.5619270Z 
2025-06-24T00:01:32.5620106Z     [90m 80| [39m
2025-06-24T00:01:32.5622683Z     [90m 81| [39m  [34mit[39m([32m'handles text input changes'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-06-24T00:01:32.5624003Z [2m Test Files [22m [1m[31m3 failed[39m[22m[2m | [22m[1m[32m3 passed[39m[22m[90m (6)[39m
2025-06-24T00:01:32.5627268Z     [90m 82| [39m    [34mrender[39m(
2025-06-24T00:01:32.5628708Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5636146Z     [90m 83| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5636963Z     [90m 84| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5637671Z 
2025-06-24T00:01:32.5638092Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/18]⎯[22m[39m
2025-06-24T00:01:32.5638411Z 
2025-06-24T00:01:32.5639413Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles textarea changes
2025-06-24T00:01:32.5640568Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5641780Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5643016Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m99:5[22m[39m
2025-06-24T00:01:32.5643685Z     [90m 97| [39m
2025-06-24T00:01:32.5644743Z     [90m 98| [39m  [34mit[39m([32m'handles textarea changes'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-06-24T00:01:32.5645588Z     [90m 99| [39m    [34mrender[39m(
2025-06-24T00:01:32.5646092Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5646668Z     [90m100| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5647504Z     [90m101| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5647948Z 
2025-06-24T00:01:32.5648352Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/18]⎯[22m[39m
2025-06-24T00:01:32.5648670Z 
2025-06-24T00:01:32.5649719Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles radio button selection
2025-06-24T00:01:32.5650901Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5652070Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5653284Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m116:5[22m[39m
2025-06-24T00:01:32.5653961Z     [90m114| [39m
2025-06-24T00:01:32.5655083Z     [90m115| [39m  [34mit[39m([32m'handles radio button selection'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-06-24T00:01:32.5655940Z     [90m116| [39m    [34mrender[39m(
2025-06-24T00:01:32.5656685Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5657286Z     [90m117| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5658097Z     [90m118| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5658535Z 
2025-06-24T00:01:32.5658933Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/18]⎯[22m[39m
2025-06-24T00:01:32.5659257Z 
2025-06-24T00:01:32.5660265Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles checkbox selection
2025-06-24T00:01:32.5661442Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5662634Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5663885Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m133:5[22m[39m
2025-06-24T00:01:32.5664727Z     [90m131| [39m
2025-06-24T00:01:32.5665672Z     [90m132| [39m  [34mit[39m([32m'handles checkbox selection'[39m[33m,[39m [35masync[39m () [33m=>[39m {
2025-06-24T00:01:32.5666542Z     [90m133| [39m    [34mrender[39m(
2025-06-24T00:01:32.5667065Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5667634Z     [90m134| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5668430Z     [90m135| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5668847Z 
2025-06-24T00:01:32.5669232Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/18]⎯[22m[39m
2025-06-24T00:01:32.5669548Z 
2025-06-24T00:01:32.5670540Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles checkbox unchecking
2025-06-24T00:01:32.5671704Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5672880Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5674264Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m152:5[22m[39m
2025-06-24T00:01:32.5675934Z     [90m150| [39m    [35mconst[39m formData [33m=[39m { testCheckbox[33m:[39m [[32m'check1'[39m[33m,[39m [32m'check2'[39m] }[33m;[39m
2025-06-24T00:01:32.5676806Z     [90m151| [39m    
2025-06-24T00:01:32.5677274Z     [90m152| [39m    [34mrender[39m(
2025-06-24T00:01:32.5677803Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5678392Z     [90m153| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5679208Z     [90m154| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5679656Z 
2025-06-24T00:01:32.5680060Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/18]⎯[22m[39m
2025-06-24T00:01:32.5680385Z 
2025-06-24T00:01:32.5681411Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mrenders auto step with tasks
2025-06-24T00:01:32.5682612Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5683833Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5685269Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m169:5[22m[39m
2025-06-24T00:01:32.5685966Z     [90m167| [39m
2025-06-24T00:01:32.5686777Z     [90m168| [39m  [34mit[39m([32m'renders auto step with tasks'[39m[33m,[39m () [33m=>[39m {
2025-06-24T00:01:32.5687541Z     [90m169| [39m    [34mrender[39m(
2025-06-24T00:01:32.5688035Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5688611Z     [90m170| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5689433Z     [90m171| [39m        [33mstep[39m[33m=[39m[33m{[39mmockAutoStepData[33m}[39m
2025-06-24T00:01:32.5689875Z 
2025-06-24T00:01:32.5690272Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/18]⎯[22m[39m
2025-06-24T00:01:32.5690590Z 
2025-06-24T00:01:32.5691601Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mshows required field indicator
2025-06-24T00:01:32.5692988Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5694512Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5695729Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m184:5[22m[39m
2025-06-24T00:01:32.5696384Z     [90m182| [39m
2025-06-24T00:01:32.5697171Z     [90m183| [39m  [34mit[39m([32m'shows required field indicator'[39m[33m,[39m () [33m=>[39m {
2025-06-24T00:01:32.5697940Z     [90m184| [39m    [34mrender[39m(
2025-06-24T00:01:32.5698447Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5698996Z     [90m185| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5699770Z     [90m186| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5700195Z 
2025-06-24T00:01:32.5700573Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[10/18]⎯[22m[39m
2025-06-24T00:01:32.5700879Z 
2025-06-24T00:01:32.5701892Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles pre-filled form data
2025-06-24T00:01:32.5703063Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5704350Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5705547Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m204:5[22m[39m
2025-06-24T00:01:32.5706263Z     [90m202| [39m    }[33m;[39m
2025-06-24T00:01:32.5706686Z     [90m203| [39m
2025-06-24T00:01:32.5707114Z     [90m204| [39m    [34mrender[39m(
2025-06-24T00:01:32.5707618Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5708174Z     [90m205| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5708945Z     [90m206| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5709366Z 
2025-06-24T00:01:32.5709658Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[11/18]⎯[22m[39m
2025-06-24T00:01:32.5710021Z 
2025-06-24T00:01:32.5710645Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mhandles empty checkbox array correctly
2025-06-24T00:01:32.5711781Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5712592Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5713273Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m221:5[22m[39m
2025-06-24T00:01:32.5714254Z     [90m219| [39m    [35mconst[39m formData [33m=[39m { testCheckbox[33m:[39m [[32m'check1'[39m] }[33m;[39m
2025-06-24T00:01:32.5715040Z     [90m220| [39m    
2025-06-24T00:01:32.5715354Z     [90m221| [39m    [34mrender[39m(
2025-06-24T00:01:32.5715658Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5715989Z     [90m222| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5716455Z     [90m223| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5716727Z 
2025-06-24T00:01:32.5717130Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[12/18]⎯[22m[39m
2025-06-24T00:01:32.5717435Z 
2025-06-24T00:01:32.5718282Z [41m[1m FAIL [22m[49m docs/wizard/src/components/StepForm.test.tsx[2m > [22mStepForm[2m > [22mshows recommended option badge
2025-06-24T00:01:32.5718958Z [31m[1mReferenceError[22m: document is not defined[39m
2025-06-24T00:01:32.5719619Z [90m [2m❯[22m render docs/wizard/node_modules/@testing-library/react/dist/pure.js:[2m257:5[22m[39m
2025-06-24T00:01:32.5720693Z [36m [2m❯[22m docs/wizard/src/components/StepForm.test.tsx:[2m239:5[22m[39m
2025-06-24T00:01:32.5721225Z     [90m237| [39m
2025-06-24T00:01:32.5721688Z     [90m238| [39m  [34mit[39m([32m'shows recommended option badge'[39m[33m,[39m () [33m=>[39m {
2025-06-24T00:01:32.5722144Z     [90m239| [39m    [34mrender[39m(
2025-06-24T00:01:32.5722444Z     [90m   | [39m    [31m^[39m
2025-06-24T00:01:32.5722920Z     [90m240| [39m      [33m<[39m[33mStepForm[39m
2025-06-24T00:01:32.5723389Z     [90m241| [39m        [33mstep[39m[33m=[39m[33m{[39mmockStepData[33m}[39m
2025-06-24T00:01:32.5723642Z 
2025-06-24T00:01:32.5723869Z [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[13/18]⎯[22m[39m
2025-06-24T00:01:32.5724049Z 
2025-06-24T00:01:32.5724716Z [2m      Tests [22m [1m[31m17 failed[39m[22m[2m | [22m[1m[32m12 passed[39m[22m[90m (29)[39m
2025-06-24T00:01:32.5725345Z [2m   Start at [22m 00:01:31
2025-06-24T00:01:32.5726039Z [2m   Duration [22m 1.31s[2m (transform 342ms, setup 0ms, collect 1.23s, tests 52ms, environment 2ms, prepare 655ms)[22m
2025-06-24T00:01:32.5726415Z 
2025-06-24T00:01:32.5726446Z 
2025-06-24T00:01:32.5747756Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5754398Z 
2025-06-24T00:01:32.5755628Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5756438Z 
2025-06-24T00:01:32.5757394Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5783167Z 
2025-06-24T00:01:32.5785147Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5786502Z 
2025-06-24T00:01:32.5788219Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5789509Z 
2025-06-24T00:01:32.5791076Z ##[error]ReferenceError: localStorage is not defined
 ❯ docs/wizard/src/App.test.tsx:7:5


2025-06-24T00:01:32.5792377Z 
2025-06-24T00:01:32.5794009Z ##[error]ReferenceError: navigator is not defined
 ❯ docs/wizard/src/components/IAWorkbench.test.tsx:6:15


2025-06-24T00:01:32.5795413Z 
2025-06-24T00:01:32.5797890Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:67:5


2025-06-24T00:01:32.5799704Z 
2025-06-24T00:01:32.5802289Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:82:5


2025-06-24T00:01:32.5822244Z 
2025-06-24T00:01:32.5825095Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:99:5


2025-06-24T00:01:32.5826835Z 
2025-06-24T00:01:32.5828440Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:116:5


2025-06-24T00:01:32.5829477Z 
2025-06-24T00:01:32.5830951Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:133:5


2025-06-24T00:01:32.5832019Z 
2025-06-24T00:01:32.5833488Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:152:5


2025-06-24T00:01:32.5834806Z 
2025-06-24T00:01:32.5836287Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:169:5


2025-06-24T00:01:32.5837322Z 
2025-06-24T00:01:32.5838725Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:184:5


2025-06-24T00:01:32.5839704Z 
2025-06-24T00:01:32.5842522Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:204:5


2025-06-24T00:01:32.5843981Z 
2025-06-24T00:01:32.5845972Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:221:5


2025-06-24T00:01:32.5847804Z 
2025-06-24T00:01:32.5849873Z ##[error]ReferenceError: document is not defined
 ❯ render docs/wizard/node_modules/@testing-library/react/dist/pure.js:257:5
 ❯ docs/wizard/src/components/StepForm.test.tsx:239:5


2025-06-24T00:01:32.6284985Z ##[error]Process completed with exit code 1.
2025-06-24T00:01:32.6385578Z Post job cleanup.
2025-06-24T00:01:32.7084922Z [command]/usr/bin/git version
2025-06-24T00:01:32.7120590Z git version 2.49.0
2025-06-24T00:01:32.7166989Z Temporarily overriding HOME='/home/runner/work/_temp/5c1ec850-4092-4309-8f2d-20ee53cca2bc' before making global git config changes
2025-06-24T00:01:32.7167884Z Adding repository directory to the temporary git global config as a safe directory
2025-06-24T00:01:32.7170821Z [command]/usr/bin/git config --global --add safe.directory /home/runner/work/workflow-locked-v1/workflow-locked-v1
2025-06-24T00:01:32.7200313Z [command]/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
2025-06-24T00:01:32.7228177Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
2025-06-24T00:01:32.7447049Z [command]/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
2025-06-24T00:01:32.7464980Z http.https://github.com/.extraheader
2025-06-24T00:01:32.7475976Z [command]/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
2025-06-24T00:01:32.7505270Z [command]/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
2025-06-24T00:01:32.7817567Z Evaluate and set job outputs
2025-06-24T00:01:32.7825495Z Cleaning up orphan processes
