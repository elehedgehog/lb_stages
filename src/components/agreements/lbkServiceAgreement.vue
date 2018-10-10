<template>
  <div class="lbkservice-agreement">
    <mt-header v-if="isShowNav" title="《乐宝卡服务与隐私协议》">
      <mt-button icon="back" slot="left" @click="$router.goBack('')"></mt-button>
    </mt-header>
    <div class="main-content" :style="toTopStyle">
      <h2>乐宝卡服务与隐私协议</h2>
      <p class="normal-content">
        乐宝卡服务与隐私协议（以下简称本协议）由广东乐数信息科技有限公司（以下简称本公司或乐宝卡）和您签订。
      </p>
      <div class="chapter">
        <h3>一、声明与承诺</h3>
        <p class="important-content">（一）您确认，在您注册成为乐宝卡用户以接受本服务前，或您以本公司允许的其他方式实际使用本服务前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。</p>
        <p class="normal-content">（二）您同意，本公司可对本协议内容进行单方变更，并以公告的方式予以公布，您可以通过乐宝卡客户端/公司网站等途径查阅；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议内容，也将遵循修改后的协议内容使用本服务；
          <span class="sub-important">若您不同意修改后的协议内容，您应停止使用本服务。</span>
        </p>
        <P class="normal-content">
          <span class="sub-important">（三）您保证，在您同意接受本协议并注册成为乐宝卡用户时，您已经年满18周岁。</span>如您不具备前述条件，您应终止注册或停止使用本服务。</P>
      </div>
      <div class="chapter">
        <h3>二、注册与注销</h3>
        <p class="period-title">（一）注册相关</p>
        <p class="normal-content">您须在乐宝卡客户端/公司网站注册并取得本公司提供给您的乐宝卡账户。您同意：</p>
        <p class="normal-content">1、按照本公司要求准确提供并在取得该账户后及时更新您正确、最新及完整的身份信息及相关资料。</p>
        <p class="normal-content">2、您应当准确提供并及时更新您提供的电子邮件地址、联系电话等联系方式及身份证、银行卡等信息，以便本公司与您进行及时、有效联系。</p>
        <p class="important-content">3、您确认，只有您本人可以使用您的乐宝卡账户。</p>
        <p class="period-title">（二）账户安全</p>
        <p class="normal-content">您将对使用该账户或密码进行的一切操作及言论负完全的责任，您同意：</p>
        <p class="normal-content">1、您应当对该等密码、身份信息等进行妥善保管，对于因密码、身份信息、校验码等泄露所致的损失由您自行承担。</p>
        <p class="normal-content">2、您同意，如您发现有他人冒用或盗用您的乐宝卡登录名及密码或任何其他未经合法授权之情形，或发生与乐宝卡账户关联的手机或其他设备遗失或其他可能危及到乐宝卡账户资金安全情形时，应立即以有效方式通知本公司，向本公司申请暂停相关服务。</p>
        <p class="normal-content">3、除非另有法律规定或经司法裁判，且征得本公司同意，否则您的乐宝卡登录名及密码、乐宝卡账户不得以任何方式转让、赠与或继承（相关的财产权益除外）。</p>
        <p class="period-title">（三）注销相关</p>
        <p class="normal-content">在需要终止使用本服务时，您可以申请注销您的乐宝卡账户，您同意：</p>
        <p class="normal-content">1、您所申请注销的乐宝卡账户应当是您本人的账户。您应当依照本公司规定的程序进行乐宝卡账户注销。</p>
        <p class="normal-content">2、乐宝卡账户注销将导致本公司终止为您提供本服务，本协议约定的双方的权利义务终止，但依本协议其他条款另行约定不得终止的或依其性质不能终止的除外。</p>
        <p class="normal-content">3、您申请注销的乐宝卡账户应当不存在任何由于该账户被注销而导致的未了结的合同关系与其他基于该账户的存在而产生或维持的权利义务，及本公司认为注销该账户会由此产生未了结的权利义务而产生纠纷的情况。</p>

      </div>
      <div class="chapter">
        <h3>三、乐宝卡服务</h3>
        <p class="period-title">（一）乐宝卡服务（以下简称为本服务）：指本条（四）所列的信用评估、提现、代收、代付等服务，及您实际使用的本公司或本公司接受您的委托为您不时提供的服务以及提供的其他服务。</p>
        <p class="period-title">（二）在使用信用评估服务前，您需符合下列要求：</p>
        <p class="normal-content">1、您使用乐宝卡信用评估服务符合当地的法律法规，并能独立承担法律责任。</p>
        <p class="normal-content">2、您需提供真实、有效、完整和最新的注册信息。</p>
        <p class="period-title">（三）在使用提现、代收或代付服务前，您需符合下列要求：</p>
        <p class="normal-content">1、您使用乐宝卡提现、支付或还款服务符合当地的法律法规，并能独立承担法律责任。</p>
        <p class="normal-content">2、您已开设了有效的银行账户，并将其与乐宝卡银行卡服务绑定（在您同意接受本协议时，您所提供的银行卡账户为您本人名下账户）。</p>
        <p class="normal-content">3、您需提供真实、有效、完整和最新的注册信息，且通过了信用评估或相关信息认证。</p>
        <p class="period-title">
          <span class="sub-important">（四）乐宝卡服务包括但不限于：信用评估、提现、代收、代付等，</span> 具体详情以本公司当时提供的服务内容为准。</p>
        <p class="normal-content">1、信用评估服务：信用评估即授予信用额度，信用评估服务是指本公司为您提供的通过读取和分析您的个人公开信息、您所授权的微博等账号信息及其他授权信息来形成您的个人信用码，授予您信用额度的服务。</p>
        <p class="normal-content">2、提现/代付服务：在符合本公司规定或产品规则的情况下，您可以请求本公司在您乐宝卡账户中的信用额度范围内提供投资人撮合服务，并提取到您名下的有效中国大陆银行账户内或支付到本公司合作商家的银行账户内，以满足您的资金需求。</p>
        <p class="normal-content">3、代收服务：如您在乐宝卡上使用了提现/代付服务，依据《借款服务协议》本公司将在账单到期后，通过您所绑定的银行账户为您提供代收还款服务。</p>
        <p class="period-title">（五）授权条款：</p>
        <p class="important-content">1、您理解并同意，您注册使用乐宝卡时，即授权本公司根据您所提供的各项信息及本公司独立获得的信息评定您在本公司所拥有的个人信用额度，或决定是否审核通过您的服务申请。</p>
        <p class="important-content">2、您理解并同意，如您向本公司授权您的信用卡账单邮箱，本公司将可能读取您所授权的邮箱中的相关信息。</p>
        <p class="important-content">3、您理解并同意，如您向本公司授权您的学信网账户，本公司将可能通过您的学信网账户查看并读取您的学籍信息；如您在授权时尚未注册学信网账户，本公司将基于您的授权代您申请注册学信网账户。</p>
        <p class="important-content">4、您理解并同意，如您向本公司提交、绑定或授权您的银行卡信息/账户，本公司将可能:</p>
        <p class="important-content">1）查询并核对您的账户信息。</p>
        <p class="important-content">2）查询并读取您银行卡账户中的交易信息。</p>
        <p class="important-content">3）基于《借款服务协议》通过您所授权或绑定的银行卡账户进行代收与代付服务。</p>
        <p class="important-content">5、您理解并同意，如您向本公司授权您的淘宝网账号，本公司将可能读取您所授权的账号中的相关信息。</p>
        <p class="important-content">6、您理解并同意，在您注册或使用乐宝卡时，本公司将可能依据《征信业管理条例》及相关法律法规，向第三方支付/征信/金融机构合法了解、获取、核实您的信用信息。所获取的个人信用信息仅在乐宝卡业务中使用，且不向其他机构、个人提供或披露。</p>
        <p class="important-content">7、您理解并同意，如您使用了提现或支付功能，则应当依据《借款服务协议》中约定之日期按期进行还款，本公司有权通过短信、电话、社交账号等途径对您进行服务与还款提醒。您理解并同意，如您未有按期履行还款义务，您的个人逾期信息将可能向第三方进行分享或公布。</p>
      </div>
      <div class="chapter">
        <h3>四、乐宝卡服务使用规则</h3>
        <p class="normal-content">为有效保障您使用本服务时的合法权益，您理解并同意接受以下规则：</p>
        <p class="normal-content">（一）本公司通过您的乐宝卡账户接受来自您的指令，无论您通过何种方式向本公司发出指令，都不可撤回或撤销，且视为您本人的指令。</p>
        <p class="normal-content">（二）您应按照本公司的要求完善您的身份信息以最终达到实名，否则您可能会受到信用评估、提现、支付和（或）还款的限制，且本公司有权对您的账户进行冻结，直至您达到实名。请您保证您信息的真实性，若被检测出虚假信息，系统将会采取拒绝申请，若涉嫌恶意信息作假或盗用他人信息，将可能记入网络征信系统，影响您的征信记录，同时本公司将保留追究您相应法律责任的权利。</p>
        <p class="normal-content">（三）本公司并非银行或其它金融机构，本服务也非金融业务，本协议项下的资金移转均通过银行或第三方支付公司来实现，你理解并同意您的资金于流转途中的合理时间。</p>
        <p class="normal-content">（四）交易风险</p>
        <p class="normal-content">因您的过错导致的任何损失由您自行承担，该过错包括但不限于：不按照交易提示操作，未及时进行交易操作，遗忘或泄漏密码、校验码等，密码被他人破解。</p>
        <p class="normal-content">（五）服务费用</p>
        <p class="normal-content">
          <span class="sub-important">1、当您使用乐宝卡服务时，乐宝卡可能会向您收取相关服务费用。</span>各项服务收费以您使用乐宝卡服务时乐宝卡网站上所公式之收费方式说明或双方另行签订的协议为准。乐宝卡保留单方面订定及调整服务收费的权利。您同意并且授权乐宝卡有权从您的账户直接扣收服务费用及/和与服务相关的其他任何费用，且扣收时无需另行通知或询证。</p>
        <p class="normal-content">2、 您在使用乐宝卡服务过程中（如充值或提现等）可能需要向第三方（如银行或第三方支付公司等）支付一定的费用，具体收费标准详见第三方网站相关页面或乐宝卡网站的提示。</p>
        <p class="normal-content">3、 您在乐宝卡进行交易而与其他方签订协议的，其他方有权按照协议的约定向您收取相关费用。</p>
      </div>
      <div class="chapter">
        <h3>五、乐宝卡服务使用限制</h3>
        <p class="normal-content">（一）您在使用本服务时应遵守中华人民共和国相关法律法规、您所在国家或地区之法令及相关国际惯例，不将本服务用于任何非法目的，也不以任何非法方式使用本服务，否则本公司有权拒绝提供本服务，或提前终止协议并追回借款，且您应承担所有相关法律责任。</p>
        <p class="normal-content">（二）您不得利用本服务从事侵害他人合法权益之行为，否则本公司有权拒绝提供本服务，且您应承担所有相关法律责任，因此导致本公司或本公司雇员或其他方受损的，您应承担赔偿责任。</p>
        <p class="normal-content">（三）您理解并同意，本公司不对因下述任一情况导致的任何损害赔偿承担责任:</p>
        <p class="normal-content">1、本公司有权基于单方判断，包含但不限于本公司认为您已经违反本协议的明文规定及精神，对您的名下的全部或部分乐宝卡账户暂停、中断或终止向您提供本服务或其任何部分，并移除或公布您的资料。</p>
        <p class="normal-content">2、本公司在发现异常交易或合理怀疑交易有疑义或有违反法律规定或本协议约定之虞时，有权不经通知先行暂停或终止您乐宝卡账户的使用（包括但不限于对账户名下的信用额度和在途交易采取取消交易、调账等限制措施），并拒绝您使用本服务之部分或全部功能。</p>
        <p class="normal-content">3、您理解并同意，存在如下情形时，本公司有权对您名下乐宝卡账户或交易的进行冻结或追回，且有权限制您所使用的产品或服务的部分或全部功能：</p>
        <p class="normal-content">1）根据本协议的约定；</p>
        <p class="normal-content">2）根据法律法规及法律文书的规定；</p>
        <p class="normal-content">3）根据有权机关的要求；</p>
        <p class="normal-content">4）您使用乐宝卡服务的行为涉嫌违反国家法律法规及行政规定的；</p>
        <p class="normal-content">5）本公司基于单方面合理判断认为账户信息、操作等存在异常时；</p>
        <p class="normal-content">6）本公司依据自行合理判断认为可能产生风险的；</p>
        <p class="normal-content">7）您在参加市场活动时有批量注册账户、提供虚假信息或材料及其他舞弊等违反活动规则、违反诚实信用原则的；</p>
        <p class="normal-content">8）错误汇入资金等导致您可能存在不当得利的；</p>
        <p class="normal-content">9）您未按时履行还款义务的；</p>
        <p class="normal-content">10）您遭到他人投诉，且对方已经提供了一定证据的。</p>
        <p class="normal-content">4、如您申请解除上述冻结或限制，您应按本公司要求如实提供相关资料及您的身份证明以及本公司要求的其他信息或文件，以便本公司进行核实，且本公司有权依照自行判断来决定是否同意您的申请。</p>
      </div>
      <div class="chapter">
        <h3>六、隐私权保护</h3>
        <p class="normal-content">本公司重视对用户隐私的保护。因收集您的信息是出于遵守国家法律法规的规定以及向您提供服务及提升服务质量的目的，本公司对您的信息承担保密义务，不会为满足第三方的营销目的而向其出售或出租您的任何信息，本公司会在下列情况下才将您的信息与第三方共享：</p>
        <p class="important-content">1、获得您的同意或授权。</p>
        <p class="important-content">2、某些情况下，只有共享您的信息，才能提供您需要的服务和（或）产品，或处理您与他人的交易纠纷或争议。</p>
        <p class="important-content">3、某些服务和（或）产品由本公司的合作伙伴提供或由本公司与合作伙伴共同提供，本公司会与其共享提供服务和（或）产品需要的信息。</p>
        <p class="important-content">4、本公司与第三方进行联合推广活动，本公司可能与其共享活动过程中产生的、为完成活动所必要的个人信息，如参加活动的中奖名单、中奖人联系方式等，以便第三方能及时向您发放奖品。</p>
        <p class="important-content">5、根据法律法规的规定及有权机关的要求。</p>
        <p class="normal-content">6、为维护本公司和其他乐宝卡用户的合法权益。</p>
        <p class="normal-content">7、根据法律规定及合理商业习惯，在本公司计划与其他公司合并或被其收购或进行其他资本市场活动（包括但不限于IPO，债券发行）时，以及其他情形下本公司需要接受来自其他主体的尽职调查时，本公司会把您的信息提供给必要的主体，但本公司会通过和这些主体签署保密协议等方式要求其对您的个人信息采取合理的保密措施。</p>
      </div>
      <div class="chapter">
        <h3>七、知识产权保护</h3>
        <p class="normal-content">（一）本公司及关联公司所有系统及本公司上所有内容，包括但不限于著作、图片、档案、资讯、资料、网站架构、网站画面的安排、网页设计，均由本公司或本公司关联公司依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。</p>
        <p class="normal-content">（二）非经本公司或本公司关联企业书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站程序或内容。</p>
        <p class="normal-content">（三）尊重知识产权是您应尽的义务，如有违反，您应承担损害赔偿责任。</p>
      </div>
      <div class="chapter">
        <h3>八、系统中断或故障</h3>
        <p class="normal-content">本公司系统因维修、故障、黑客攻击、电信部门技术调整或故障、网站升级、银行方面、意外、不可抗力等状况无法正常运作，使您无法使用各项服务时，本公司不承担损害赔偿责任。</p>
      </div>
      <div class="chapter">
        <h3>九、 责任范围及责任限制</h3>
        <p class="normal-content">（一）本公司仅对本协议中列明的责任承担范围负责。</p>
        <p class="normal-content">（二）本公司用户信息是由用户本人自行提供的，本公司无法保证该信息之准确、及时和完整。</p>
        <p class="normal-content">（三）本公司不对信用评估额度及本服务提供任何形式的保证。</p>
      </div>
      <div class="chapter">
        <h3>十、协议生效与终止</h3>
        <p class="important-content">本协议自您勾选“我已阅读并同意”并点击“立即激活”按钮之日之日起生效，至双方在本协议项下的全部义务履行完毕之日终止。非经双方协商一致或依照本协议约定，任何一方不得解除本协议。</p>
      </div>
      <div class="chapter">
        <h3>十一、法律适用与管辖</h3>
        <p class="normal-content">本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，没有相关法律规定的，参照通用国际商业惯例和（或）行业惯例。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并
          <span class="sub-important">由被告住所地人民法院管辖。</span>
        </p>
      </div>
      <div>
        <h2>快捷签署服务委托协议书</h2>
        <div class="chapter">
          <h3>一、概述</h3>
          <p class="normal-content">1、本快捷签署服务协议（以下简称“委托书”）由广东乐数信息科技有限公司（以下简称：“乐宝卡”或本公司）与您就快捷签署服务所订立的有效合约。您通过网络页面点击确认本协议或以其他方式选择接受本协议，即表示您与乐宝卡已达成协议并同意接受本协议的全部约定内容。</p>
          <p class="normal-content">2、在接受本协议之前，请您仔细阅读本协议的全部内容（特别是以粗体下划线标注的内容 ）。
            <span class="underline-important">如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。</span>
          </p>
          <p class="normal-content">3、
            <span class="underline-important">您同意，乐宝卡有权根据政策法规或业务需要对本协议内容进行版本更新，在乐宝卡用户端予以公布，无需另行单独通知您；若您在本协议内容公告变更生效后继续使用本服务的，表示您已充分阅读、理解并接受变更修改后的协议内容，也将遵循变更修改后的协议内容使用本服务；若您不同意变更修改后的协议内容，您应在变更生效前停止使用本服务。</span>
          </p>
        </div>
        <div class="chapter">
          <h3>二、双方权利义务</h3>
          <p class="normal-content">1、您应确保您是使用本服务的CA数字证书的合法持有人，可合法、有效使用该CA数字证书且未侵犯任何第三方合法权益，否则因此造成乐宝卡、CA数字证书真实持有人损失的，您应负责赔偿并承担全部法律责任，包括但不限于
            <span class="underline-important">对您的乐宝卡账户中的余额进行止付、终止或中止为您提供乐宝卡服务、从您的前述乐宝卡账户中扣除相应的款项等。</span>
          </p>
          <p class="normal-content">2、
            <span class="underline-important">您应确保开通本服务所提供的手机号码为本人所有，并授权乐宝卡可以通过第三方渠道对您所提供手机号码的真实性、有效性进行核实。</span>
          </p>
          <p class="normal-content">3、
            <span class="underline-important">您同意乐宝卡有权依据其自身判断对涉嫌欺诈或被他人控制并用于欺诈目的的乐宝卡账户采取相应的措施，上述措施包括但不限于对您的乐宝卡账户中的余额进行止付、终止或中止为您提供乐宝卡服务、冻结涉嫌欺诈的资金等。</span>
          </p>
          <p class="normal-content">4、
            <span class="underline-important">您应妥善保管银行卡、卡号、密码、发卡行预留的手机号码以及乐宝卡账号、密码、CA数字证书、支付盾、宝令、手机动态口令、乐宝卡账户绑定的手机号码、来自于发卡行和/或乐宝卡向您发送的校验码等与CA数字证书或与乐宝卡账户有关的一切信息和设备。如您遗失或泄露前述信息和/或设备的，您应及时通知发卡行及/或乐宝卡，以减少可能发生的损失。无论是否已通知发卡行及/或乐宝卡，因您的原因所致损失需由您自行承担。</span>
          </p>
          <p class="normal-content">5、您在使用本服务时，应当认真确认交易信息，包括且不限于服务名称、数量、金额等，并按乐宝卡业务流程发出约定的指令。
            <span class="underline-important">您认可和同意：您发出的指令不可撤回或撤销，乐宝卡一旦根据您的指令使用您的CA数字证书进行合同签署，您不应以非本人意愿交易或其他任何原因要求乐宝卡撤销合同或承担其他责任。</span>
          </p>
          <p class="normal-content">6、您在对使用本服务过程中发出指令的真实性及有效性承担全部责任；您承诺，乐宝卡依照您的指令进行操作的一切风险由您承担。</p>
          <p class="normal-content">7、
            <span class="underline-important">您认可乐宝卡账户的使用记录数据、交易金额数据等均以乐宝卡系统平台记录的数据为准。</span>
          </p>
          <p class="normal-content">
            8、您同意乐宝卡有权留存您在乐宝卡客户端填写的相应信息，并授权乐宝卡查询该帐号的相关信息，包括且不限于借记卡余额、信用卡账单、CA数字证书信息、征信信息等内容，以供后续向您持续性地提供相应服务（包括但不限于将本信息用于向您推广、提供其他更加优质的产品或服务）。
          </p>
          <p class="normal-content">9、
            <span class="underline-important">出现下列情况之一的，乐宝卡有权立即终止您使用乐宝卡相关服务而无需承担任何责任：（1）将本服务或借款用于非法目的；（2）违反本协议的约定；（3）违反乐宝卡及/或乐宝卡关联公司网站或客户端的条款、协议、规则、通告等相关规定及您与前述主体签署的任一协议，而被上述任一主体终止提供服务的；（4）乐宝卡认为向您提供本服务存在风险的；（5）您的CA数字证书无效、有效期届满或注销（如有）。</span>
          </p>
          <p class="normal-content">10、若您未违反乐宝卡服务协议及本协议约定且因不能归责于您的原因，造成CA数字证书通过本服务被使用于未经授权的合同，造成您的资金损失的，您可向乐宝卡申请补偿。
            <span class="underline-important">您应在知悉资金发生损失后及时通知乐宝卡并按要求提交相关的申请材料和证明文件。具体处理方式由乐宝卡自行选择决定，乐宝卡承诺不会因此损害您的合法权益。</span>
          </p>
          <p class="normal-content">11、
            <span class="underline-important">若有证据证明您涉嫌欺诈的，或者发生您应当自行承担责任的其他情形，您应在第一时间通知乐宝卡并赔偿乐宝卡相应的损失，否则乐宝卡有权采取包括但不限于从您全部或部分乐宝卡账户（含该账户之关联账户）划扣等方式向您进行追偿，乐宝卡有权将您的前述欺诈情形纳入个人征信体系，并体现在您的个人信用记录中，由此造成的信用损失，乐宝卡不承担任何责任。</span>
          </p>
          <p class="normal-content">12、
            <span class="underline-important">您同意乐宝卡有权将其在本协议项下的权利转让给与您实际签署借贷合同的出借方和/或出借方的技术提供方。</span>
          </p>
        </div>
        <div class="chapter">
          <h3>三、承诺与保证</h3>
          <p class="normal-content">1、
            <span class="underline-important">您保证使用本服务过程中提供的信息真实、准确、完整、有效。乐宝卡按照您设置的相关信息为您提供相应服务，对于因您提供信息不真实或不完整所造成的损失由您自行承担。</span>
          </p>
           <p class="normal-content">2、
            <span class="underline-important">您授权乐宝卡在您使用本服务期间或本服务终止后，有权保留您在使用本服务期间所形成的相关信息数据，同时该授权不可撤销。</span>
          </p>
        </div>
        <div class="chapter">
          <h3>四、其他条款</h3>
          <p class="normal-content">1、
            <span class="underline-important">、因本协议产生之争议，均应依照中华人民共和国法律予以处理，并由广州市天河区人民法院管辖。</span>
          </p>
          <p class="normal-content">2、您同意，本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。</p>
          <p class="normal-content">3、本协议部分内容被有管辖权的法院认定为违法或无效的，不因此影响其他内容的效力。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "",
    data() {
      return {
        isShowNav: true
      }
    },
    computed: {
      toTopStyle() {
        if (this.isShowNav) {
          return {
            "padding": "48px 15px 15px 15px"
          }
        } else {
          return {
            "padding": "0px 15px 15px 15px"
          }
        }
      }
    },
    created() {
      if(this.$route.query) {
        this.isShowNav = this.$route.query.isShowNav;
      } else {
        this.isShowNav = false;
      }
    }
  }

</script>

<style lang="less" scoped>
  @w: 75rem;
  .lbkservice-agreement {
    background-color: white !important;
    .main-content {
      padding: 0px 15px 15px 15px;
      background-color: white;
      h2 {
        text-align: center;
        font-weight: 500;
      }
      .important-content,
      .sub-important {
        text-indent: 60/@w;
        font-size: 30/@w;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 45/@w;
      }
      .normal-content {
        text-indent: 60/@w;
        letter-spacing: 1px;
        line-height: 45/@w;
      }
      .underline-important {
        text-indent: 60/@w;
        font-size: 30/@w;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 45/@w;
        text-decoration: underline;
      }
    }
  }

</style>
