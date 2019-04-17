/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d073f19f74d7695ff410244da9244936"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.a69606e9.js",
    "revision": "2d5702aff2b18babbfeb4ab0ea4fc85a"
  },
  {
    "url": "assets/js/13.d5b39a3b.js",
    "revision": "aa4384e5aabe7e56b7eaf7301ef01246"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.0d97a3f1.js",
    "revision": "86553b71e95a24abbb0842a78daaa0a2"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.e54d2efd.js",
    "revision": "d0ce26b91ccc67909ab954a572d96f72"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.1a5762e2.js",
    "revision": "ad3926bb2856c31fb4a5118a0dbe56c2"
  },
  {
    "url": "assets/js/21.b9c83e85.js",
    "revision": "b921ec291f9a0592da5243f3a639001f"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.f8d1d035.js",
    "revision": "48939d8b9e78c9f7344876ca607a14ef"
  },
  {
    "url": "assets/js/26.05c11010.js",
    "revision": "e625043f29005862d1791da575587091"
  },
  {
    "url": "assets/js/27.bc26b064.js",
    "revision": "5c83e9b37af187944748bbf7a5a3a7dd"
  },
  {
    "url": "assets/js/28.f2b64488.js",
    "revision": "5b53080965cab7797eeea6ea192a726c"
  },
  {
    "url": "assets/js/29.5a0dcddb.js",
    "revision": "eff6efb08a90037afdf03d12128da5f2"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.7634af71.js",
    "revision": "cb9ce56277daf35f1e0b1dca8dc78408"
  },
  {
    "url": "assets/js/34.445dcc5f.js",
    "revision": "7cc92e8fe4738989e06586be54ad8803"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.aac9c9ad.js",
    "revision": "7996797c6f390a652d4d6183e45afd26"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.2470c62a.js",
    "revision": "1cec55678b13ea069f6b850d622885be"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.4516232e.js",
    "revision": "3376f02d03d9493070e4c33aa87f558a"
  },
  {
    "url": "assets/js/42.6b8e90d0.js",
    "revision": "09060804ef3c9a51b48e8e889a6e5ce7"
  },
  {
    "url": "assets/js/43.fb4273bb.js",
    "revision": "02e0aa492c5a51049c8b84f4c2d0d037"
  },
  {
    "url": "assets/js/44.f11c8659.js",
    "revision": "7eac8b651bc6cafe458b6ba5e6650648"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.422b60b2.js",
    "revision": "a4112a54482e5bc12597fbfb8b7721dd"
  },
  {
    "url": "assets/js/48.89edf591.js",
    "revision": "264ef0dcd8be0587976541e11c6b1fa4"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.0bfa7501.js",
    "revision": "56dbaed1405e54a58d6c38592d2c4b1f"
  },
  {
    "url": "assets/js/51.23a12957.js",
    "revision": "19586e7dc81110332e7d5b527e72bd3e"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.22d03e2d.js",
    "revision": "407ca9600665b93aa8d1f3b4f0b07d77"
  },
  {
    "url": "assets/js/54.eb82f221.js",
    "revision": "14bb00cb2ff91062b99f4d78c6caecaf"
  },
  {
    "url": "assets/js/55.3bcc9eda.js",
    "revision": "21e6c0148950755660326797a9c33879"
  },
  {
    "url": "assets/js/56.ef8aa482.js",
    "revision": "33e8cc186a3bae5b83bb2bf2d1f00c72"
  },
  {
    "url": "assets/js/57.59d0262d.js",
    "revision": "4bd229059ce925d3ac561f6c847fded5"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.f6a3d680.js",
    "revision": "7e2f01ae6e40c0ab9fe93bb207338bb3"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.ff3840cc.js",
    "revision": "3e8d3537a00b1e09e1d5328f250d19d8"
  },
  {
    "url": "assets/js/62.f2769ede.js",
    "revision": "5c141271c7dc76256843014fa0d55c66"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.3acd93e6.js",
    "revision": "506a6286d82edf838eab423e74c3d591"
  },
  {
    "url": "assets/js/66.3a080038.js",
    "revision": "4b5926642e6781ffe8973efce2a5c6b7"
  },
  {
    "url": "assets/js/67.6a1ee4cd.js",
    "revision": "7efb39888cdb37fcbbd9c48e54511743"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.262261c0.js",
    "revision": "33bb3b7103e96e382da28a746a420657"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.45bdf16a.js",
    "revision": "833fff53392b4617421eecb5316f47ed"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.f3d5cf5d.js",
    "revision": "e6653462aff7f2698857e74b59ae327c"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.877caa02.js",
    "revision": "bb097210deaa63f203e2ae5ac9ed83ba"
  },
  {
    "url": "assets/js/76.d9184990.js",
    "revision": "a6b5370e9e7f432df7104640601ad56f"
  },
  {
    "url": "assets/js/77.621bd0e5.js",
    "revision": "b51cf8877c9b29d58c1a79a7173d4d7b"
  },
  {
    "url": "assets/js/78.aa7f73bb.js",
    "revision": "1ff018ee8de2dc7dc96c7f16e5be7357"
  },
  {
    "url": "assets/js/79.8127e7f7.js",
    "revision": "81c208c735aa60a528e0e2c4e78ac9d7"
  },
  {
    "url": "assets/js/8.b1a194c7.js",
    "revision": "c4b4d4b05598f9acf02b5abde2d8e33f"
  },
  {
    "url": "assets/js/80.42eacae5.js",
    "revision": "a4b63200d454ab45ab0f1a1a846e48d0"
  },
  {
    "url": "assets/js/81.cf40d4b2.js",
    "revision": "09f11e6976572cb05e1c820bfc1c9fa7"
  },
  {
    "url": "assets/js/82.db8b792f.js",
    "revision": "5c96fd5d1f0e47ba9a88eb69de3a2ceb"
  },
  {
    "url": "assets/js/83.2cffe812.js",
    "revision": "4a7cc4de32ffccc16bccdc52ea6ee491"
  },
  {
    "url": "assets/js/84.7c88b6a5.js",
    "revision": "fc42d73c8866116a67fa65b5ff4bb95c"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.25ccf3f9.js",
    "revision": "2f620a60362f4df82011428ec441fc19"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.4a33dbda.js",
    "revision": "61f8225c4cbb5eb3eddb7ddbd2e8811d"
  },
  {
    "url": "compiler/ast.html",
    "revision": "d85dc87a94b9207dffd08fd1ca2e2092"
  },
  {
    "url": "compiler/binder.html",
    "revision": "c085e60ca8dad7ee916ac5d9329605a7"
  },
  {
    "url": "compiler/checker.html",
    "revision": "9cf6ff3bb892ecba3f205c2c1ba4fb25"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "8417e45d9a0e07bea21bab3c343c4fe7"
  },
  {
    "url": "compiler/overview.html",
    "revision": "9e3784e8222811bb63cc679d4e9541ee"
  },
  {
    "url": "compiler/parser.html",
    "revision": "afbf1b4ea8ea6120fe41efb7bae48be3"
  },
  {
    "url": "compiler/program.html",
    "revision": "cb1ca18a24516060d04d735c23f51690"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "5a9588bf8dfe1b6292f298570b627f0a"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "170388bc454764dd1c75f4985ee295d4"
  },
  {
    "url": "error/interpreting.html",
    "revision": "81ff41ddc8064ea06f580006a85b0383"
  },
  {
    "url": "faqs/class.html",
    "revision": "cf927e29753e4fb810fefd7dfab38139"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "bcf6a3fdec2189541adec72671019bbc"
  },
  {
    "url": "faqs/comments.html",
    "revision": "4efe3f2a2bec5e968d00853c8b411735"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "0a685dc1e71c7d476e5b09634fe0d385"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "646dfc4422440f390c00b008ff14c2ab"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "6a07b476a24d590b92a7b9726c3c6959"
  },
  {
    "url": "faqs/enums.html",
    "revision": "964f4a33cdf3cfa8d5066acf883f8817"
  },
  {
    "url": "faqs/function.html",
    "revision": "1fa96d1dab15f27b4451a72497e9a205"
  },
  {
    "url": "faqs/generics.html",
    "revision": "3ffb1c481178c003eb1cd70b78c44061"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "3a6ec2f6dbaa81190184f81d5390b425"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "9f43f6601a83b5121d2ad8df2ccba558"
  },
  {
    "url": "faqs/modules.html",
    "revision": "ceac128ef55f78d4e23444a7aae5b018"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "752bd369856918a208a5d1012ae1a7ea"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "71608583d39a0edb98205b4b462d661c"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "b39c662f7fdbef2556e4d1a440e4953b"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "17b8ef533616e85b923ccaebfda941f2"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "1553feede2907cd776552f1d750c9308"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "b48a05d77cc6837910ff02fec1d5617e"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "51e18b898909613f20c0d757eba71f8f"
  },
  {
    "url": "jsx/support.html",
    "revision": "23b78cb43e33101cf9ad08ea7355e900"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "b8d026b9187784977ff500b7407c6f03"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "9870dd37294b79f296bca86cbd6cbad8"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "38ed70c47f3e6c046a2a0fd40021370d"
  },
  {
    "url": "project/modules.html",
    "revision": "e77dd82a9b45b00ae740ee56ebcac46d"
  },
  {
    "url": "project/namespaces.html",
    "revision": "828e1099d18161272ea6fddac2d795c6"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "c0131040b9ec26552905e28100d1e123"
  },
  {
    "url": "tips/barrel.html",
    "revision": "aaed1af026b50c52464d83e64f8f388b"
  },
  {
    "url": "tips/bind.html",
    "revision": "ea055153da46206433c68460e3146014"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "2e504a608242561978faf2f708d613af"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "13a3c37e386609173aada85d1a3e10e8"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "990dc9048fb6508f89163768b9f97191"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "62db21405d7f08cbba8d5ea8003233e3"
  },
  {
    "url": "tips/curry.html",
    "revision": "7104cbbc0d79a78dca87fb533ed323dd"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "2fe6a048895ebdbca4463de2e0c55c4c"
  },
  {
    "url": "tips/infer.html",
    "revision": "b63a0a33fc83339c43a42b6790e0a0b0"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "dd3b9c8ebd92cb47c5e4b5b4ea712441"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "e2a16fd81085e051001fec4ead5a91be"
  },
  {
    "url": "tips/metadata.html",
    "revision": "00bf0e3971fa8f142605cf2662c5f15f"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "b29a93d5f2eb86b62fa07c7fc6bade0c"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "1e91a18f7f40c1fc42a95ead845ca298"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "27e351e27e4afa1908bc60ce3a0aa44b"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "3a404cbf3b292e5d2e607a92d3a220c1"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "0d797b9cc3530fe098eb728bd27c3bb7"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "116eb0ce38bbd67bde33a2342ea052ea"
  },
  {
    "url": "tips/truthy.html",
    "revision": "521a8ddf9239f77571d820e3471afc10"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "f40096562899c8e3533d29d87cca420b"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "0e0b84ec9055bb4b26c7a55cf9990ddf"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "466da1759174dd76ef065e185ca544be"
  },
  {
    "url": "typings/callable.html",
    "revision": "3cdff3b21087a1ee038cd76986f35049"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "d3e2713732834dd995716107143d534b"
  },
  {
    "url": "typings/enums.html",
    "revision": "c0e58c6dec0029ee62f8c9093b3861f0"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "79c156fc6be4401d8ac7026eaddf7883"
  },
  {
    "url": "typings/freshness.html",
    "revision": "3efc744a4f9d78b834043bed314944e8"
  },
  {
    "url": "typings/functions.html",
    "revision": "98764819d51842c8a5dd927d47b67e01"
  },
  {
    "url": "typings/generices.html",
    "revision": "1985668fad1501b16b36dab9a97321f4"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "41304052c7b9e103da7afd46794bb151"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "cddaf944e3dcfa13325a9e87210353c2"
  },
  {
    "url": "typings/lib.html",
    "revision": "8142b64fece04329869d6705e4d76702"
  },
  {
    "url": "typings/literals.html",
    "revision": "e7fb538a1746a78e043ecda319656d67"
  },
  {
    "url": "typings/migrating.html",
    "revision": "e940f8b345bd3ab44f5b2e40b35e8c16"
  },
  {
    "url": "typings/mixins.html",
    "revision": "08feb073998311f509e21f869b1c16da"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "4cc2e357ddc1613ed50fa11645dea22b"
  },
  {
    "url": "typings/neverType.html",
    "revision": "229832a4f66e3e408dca4f329e1cbbdb"
  },
  {
    "url": "typings/overview.html",
    "revision": "600a7383e91519724482e108bbfd3767"
  },
  {
    "url": "typings/readonly.html",
    "revision": "36b81a4a15327341d78005ac4d706722"
  },
  {
    "url": "typings/thisType.html",
    "revision": "19f681627dd2fdfe8d18d1e2a6e12165"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "982500e6afdb9cb17f63f1572f3558a6"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "0209c1826bd85e0959cdc2fc84c384dd"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "e1ff86485d9f3e0ca6432938a753768f"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "bb92a3936953a3daf454391b54cea22b"
  },
  {
    "url": "typings/types.html",
    "revision": "ba7a3e22aa1ca23f6cc44e6510b0d520"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
