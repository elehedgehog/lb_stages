<template>
  <div class="personal-agreement">
    <mt-header v-if="isShowNav" title="《个人消费借款及服务合同》">
      <mt-button icon="back" slot="left" @click="$router.goBack('')"></mt-button>
    </mt-header>
    <div class="main-content" :style="toTopStyle">
      <p class="instructions">用户须知：您确认，在申请本协议项下服务时，您已详细阅读本协议的所有内容，充分理解并同意接受本协议的全部内容。本协议会对与您的权益具有或可能具有重大关系的条款，以及对本公司具有或可能具有免责或限制责任的条款均用粗体字标注，请您注意。如果您不同意本协议的任意内容，或者无法准确理解本公司对条款的解释，请不要进行后续操作。</p>
      <h2 class="title">个人消费借款及服务合同</h2>
      <div class="borrower">
        <p>甲方（借款人）：【
          <span>{{borrower}}</span> 】</p>
        <p>证件类型：【
          <span>身份证</span> 】</p>
        <p>身份证号：【
          <span>{{idNumber}}</span> 】</p>
      </div>
      <div class="lenders">
        <p>乙方（出借人）：
          <span>根据借款人情况推荐的资金方</span>
        </p>
        <p>丙方（技术服务方）：【
          <span>{{companyName}}</span> 】</p>
      </div>
      <p class="important-content">在接受本协议之前，请仔细阅读本协议的全部内容。如果您不同意本协议的内容，或者无法准确理解本协议条款的含义，请不要进行后续操作。</p>
      <p class="normal-content">
        本次借款是由丙方提供信息技术服务，推荐持牌金融机构出借资金给借款人或由合作的网络借贷信息中介机构撮合借贷交易。
      </p>
      <p class="normal-content">协议各方于【
        <span>{{signingDate}}</span> 】同意签署本合同并接受本合同之法律约束。</p>
      <div class="chapter">
        <p class="important-content">第一条 借款基本信息</p>
        <p class="normal-content">
          1、贷款本金：人民币【
          <span>{{loanPrincipal}}</span> 】元。
        </p>
        <p class="normal-content">
          2、贷款期限及综合资金成本：【
          <span>分期</span> 】（【
          <span>{{LoanTimeLimit}}</span> 】），综合借款成本为【
          <span>{{payMonthRate}}%/月</span> 】
        </p>
        <p class="normal-content">
          3、到期应还总额：【
          <span>{{repayTotalAmount}}</span> 】元【每期应还总额详见系统生成的账单，具体以贷款发放日期计算为准】
        </p>
        <p class="normal-content">
          4、贷款本金由乙方或丙方委托第三方机构支付至甲方指定的如下银行账户（此银行账户同时是甲方指定的还款账户，甲方后续可自行变更）。 开户行名称：【
          <span>{{bankName}}</span> 】 账户：【
          <span>{{bankCardId}}</span> 】。
        </p>
        <p class="normal-content">
          5、贷款用途：仅限于【
          <span>{{loanPurpose}}</span> 】用途（购房、购车除外）。甲方使用本合同项下贷款消费时，应保留相应的消费凭据（包括但不限于发票、收据、购物凭证等），在丙方要求提供时，甲方应当提供。
        </p>
        <p class="normal-content">6、购买商品：甲方充分知情并同意，若甲方选择的消费场景为购买商品，则甲方购买商品的费用将在放款时扣除。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第二条 还款</p>
        <p class="normal-content">
          1、还款方式
        </p>
        <p class="normal-content">
          A）本合同项下借款的还款方式为每月以一定金额偿还借款本息费，借款到期日归还剩余本金和利息费用等。
        </p>
        <p class="normal-content">
          B）计算公式为：每月应还款项=借款本金×每月对应本金还款比率＋每月应还利息和服务费（如有）。
        </p>
        <p class="normal-content">
          2、还款日
        </p>
        <p class="normal-content">
          还款日以甲方贷款发放日开始起算，甲方每月还款日为甲方借款发放日前一日所对应的每月的自然日（若借款发放日为30日或31日，但甲方在还款当月无前述日期，则该月甲方的还款日为该月最后一日），具体日期以系统账单显示为准。
        </p>
        <p class="normal-content">3、甲方每月的应还款项包括每月应还的贷款本金、每月应还的贷款利息和甲方应向丙方支付的服务费（如有）。</p>
        <p class="normal-content">4、到期还款</p>
        <p class="normal-content">(1）甲方授权丙方及其关联企业通过委托其指定的第三方支付机构及存管银行等合作机构在不早于还款日划转金额相当于每期应还金额的资金至乙方第三方支付机构及存管银行账户下，划转完毕即视为本期还款成功。</p>
        <p class="normal-content">(2）为及时偿还贷款本息费，甲方应在贷款期内始终维持其还款账户状态正常且可用余额充足。甲方不可撤销地授权丙方及其关联企业有权委托第三方机构代收/代扣本合同项下贷款本息费及其他应付款项。甲方须在还款日当日（北京时间：10：00）之前将足额款项存入还款账户供丙方及其关联企业委托的第三方机构按时扣收；即使还款日非工作日，还款时间并不顺延，甲方应提前存入足额款项。甲方在此不可撤销地授权丙方及其关联企业委托的第三方机构于还款日或该日后从还款账户自行扣收全部到期应付款项。如因余额不足、卡片状态不正常等任何原因导致未能成功扣款，由此产生的逾期及其他损失和不利后果由甲方自行承担。</p>
        <p class="normal-content">（3）甲方也可以选择在每期还款日前使用丙方支持的还款渠道主动进行还款操作，将款项支付给丙方。</p>
        <p class="normal-content">（4）乙方确认并同意，乙方委托丙方代为接收甲方归还的本金及利息费用等。</p>
        <p class="normal-content">（5）甲方的每期还款均应按照如下顺序清偿，如无此项则顺延：</p>
        <p class="normal-content">A. 根据本协议产生的其他全部费用；</p>
        <p class="normal-content">B. 逾期管理费；</p>
        <p class="normal-content">C. 罚息；</p>
        <p class="normal-content">D. 利息；</p>
        <p class="normal-content">E. 本金。</p>
        <p class="normal-content">5、逾期还款</p>
        <p class="normal-content">（1）甲方未在本协议约定的日期内偿还当期应还款项的以及丙方未在本协议约定的日期内成功扣收当期应还款项的，视为逾期。</p>
        <p class="normal-content">（2）如甲方逾期还款时，除应继续偿还乙方的本金和截止到期还款日的利息费用以外，还应支付逾期利息及逾期管理费，自甲方逾期开始之日起计算，由丙方统一收取。（逾期利息与逾期管理费的收费标准以借款当时借款页面显示为准）</p>
        <p class="normal-content">（3）甲方和乙方一致同意：借款逾期后，乙方委托丙方对逾期款项进行还款提醒和催收。还款提醒和催收方式包括但不限于：给甲方或甲方的联系人发送短信、发送电子邮件、电话、上门及委托第三方催收。</p>
        <p class="normal-content">（4）在甲方逾期还款的情况下，乙方授权丙方采取包括但不限于如下方式对债权进行追索：委托专业的催收公司或自行催收、将债权转让给第三方、对债权进行重组。丙方有权决定与以上债权追索相关的事宜，包括选定委托催收公司和决定催收费用、确定债权转让价格、决定债权重组计划等。</p>
        <p class="normal-content">6、提前还款</p>
        <p class="normal-content">（1）借款期限届满前，甲方可提前归还剩余全部借款本息。</p>
        <p class="normal-content">（2）甲方提前偿还部分借款的，仍应按本协议约定的月还款额向丙方支付款项。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第三条 各方权利和义务</p>
        <p class="normal-content">
          甲方的权利和义务
        </p>
        <p class="normal-content">
          1、甲方承诺提供的信息及时、合法、真实、有效，且不存在任何隐瞒和欺诈，对于可能影响借款行为的情况，甲方承诺及时向丙方披露。若在借款及还款过程中，甲方的资信状况或其他已经提供的信息发生变更的，甲方承诺在知道或应当知道该等情况发生后的2个工作日内以书面形式通知丙方，否则由此导致的损失及相关后果由甲方承担。
        </p>
        <p class="normal-content">
          2、甲方确认具有足够的偿债能力归还本合同项下的借款本息及其他费用。
        </p>
        <p class="normal-content">
          3、甲方应保证借款用途合法合规，并且只用于上述指定用途，不得用于投资股票、场外配资、期货合约、结构化产品及其衍生品等高风险的融资。
        </p>
        <p class="normal-content">
          4、甲方同意以网络页面点击确认或其他方式（包括但不限于签字或签章确认等方式）签订本协议。
        </p>
        <p class="normal-content">5、甲方应按照本协议的约定按期足额向乙方还款并支付利息。</p>
        <p class="normal-content">6、甲方应保证其指定账户状态正常，确保资金划入、划出交易的完成。如因前述指定账户不正常导致的所有损失（如借款资金无法及时入账、还款资金无法划转等）应由其承担。</p>
        <p class="normal-content">7、甲方不得以出租、转借或其他方式将使用借款服务过程中的相关账户、密码、身份证件信息、手机号码、银行卡信息等信息交由任何其他第三方使用，否则由此导致的损失及相关后果由甲方承担。</p>
        <p class="normal-content">8、未经乙方书面同意，甲方不得转让本协议项下的债务。</p>
        <p class="normal-content">9、甲方在此同意，对于甲方提供的和丙方及其关联企业授权收集的用户个人信息和资料，丙方及其关联企业有权按照本服务协议的约定进行使用或者披露；甲方授权丙方及其关联企业基于履行有关协议、保障交易安全目的、贷后管理等使用甲方的个人信息（包括但不限于甲方自行提供的以及其他各方合法收集和获取的其他资料）。</p>
        <p class="normal-content">10、为确保甲方的交易行为能够及时获得资金的支持，甲方同意将甲方信息披露给丙方及其关联企业以及资金提供方。丙方及其关联企业和资金方有义务根据有关法律、法规、规章及其他政府规范性文件的要求向司法机关和政府部门提供甲方的个人及交易信息。</p>
      </div>
      <div class="chapter">
        <p class="important-content">乙方的权利和义务</p>
        <p class="normal-content">
          1、乙方同意且委托丙方在本合同第一条项下借款审核完毕后通过银行或第三方支付平台将借款划拨给甲方。
        </p>
        <p class="normal-content">2、乙方有权向甲方收取利息费用等。</p>
        <p class="normal-content">
          3、如甲方违约，乙方有权要求丙方向乙方披露甲方的个人信息以便获得违约救济。
        </p>
        <p class="normal-content">
          4、就乙方在本协议项下对甲方的部分或全部债权，乙方有权根据自己的意愿对外转让。甲方确认：乙方将债权转让事项通知丙方，即视为乙方完成了对甲方的债权转让通知。如果债权转让给多个受让人，各个受让人按照其持有债权数额享有本协议项下乙方的权利。如按照本协议第二条第4款的顺序清偿时，甲方全部还款不足以偿还本协议项下全部本金、利息相关费用等款项的，各受让人按照其受让债权比例收取还款。
        </p>
        <p class="normal-content">5、乙方应主动缴纳由利息所得带来的可能的税费。</p>
        <p class="normal-content">6、乙方授权丙方代为追缴甲方逾期未还款项。</p>
        <p class="normal-content">7、乙方在此不可撤销地委托丙方代为处理本协议项下乙方与甲方、担保人（如有）、监管方之间的全部争议，丙方有权为维护乙方利益采取一切必要的手段，包括但不限于调解、诉讼等。乙方委托代理前述事项的权限包括但不限于代为提出、承认、变更、撤回、放弃诉讼请求；代为进行答辩，提出、承认、变更、撤回、放弃诉讼反请求；参加开庭审理、陈述事实及代理意见并参加调查、质证活动；接受调解、和解；代为领取裁判文书及诉讼标的。且乙方同意丙方可将前述委托事项转委托给专业机构及人员（如律师事务所、律师等）。</p>
      </div>
      <div class="chapter">
        <p class="important-content">丙方的权利和义务</p>
        <p class="normal-content">
          1、丙方受甲方的委托，根据甲方的借款需求提供相应的信息技术服务，将甲方的借款需求推介给乙方后，乙方按本借款协议约定的日期将其借款本金支付给甲方。
        </p>
        <p class="normal-content">2、根据相关监管要求，丙方及其关联企业有权对甲方的个人基本信息、债务信息、信用信息予以保留及适当披露。丙方及其关联企业对该等信息负有保密义务，除根据相关法律法规、本协议的相关约定、或出于为甲方提供更好的服务之目的需将甲方信息进行对外提供的情形外，未经甲方允许，丙方及其关联企业不得擅自将甲方信息披露或提供给任何与协议无关的其他方。</p>
        <p class="normal-content">
          3、丙方有权将甲方个人信息以及信用评估结果共享给资金服务方，以供其他各方进行风险评估使用。
        </p>
        <p class="normal-content">
          4、为更好的为甲方提供信用评估等相关服务，丙方及其关联企业可以采用如下方式为甲方提供服务，丙方及其关联企业承诺并保证在此过程中会履行保密义务（法律和约定另有约定的情形除外）：
        </p>
        <p class="normal-content">
          （1） 收集、保存、整理、加工、共享、发布借款人信息、个人征信和需求；
        </p>
        <p class="normal-content">（2）代收、还借款；</p>
        <p class="normal-content">（3）代为注册、使用、管理电子签名相关证书；</p>
        <p class="normal-content">（4）对上述授权及委托的转授权及转委托等。</p>
        <p class="normal-content">5、甲方同意并授权，甲方在注册使用本次借款服务时，即授权丙方及其关联方根据甲方所提供的各项信息及丙方独立获得的信息评定甲方在丙方所拥有的个人信用风险，以决定是否审核通过甲方的服务申请。甲方向丙方提交有关信息和资料的行为，均应视为已合法授权丙方及其关联方因提供本服务的需要而对甲方相关信息（包括但不限于身份信息、学历信息、消费信息等）进行查询、采集、储存、整理、加工，并按照本服务条款的约定向资金提供方提交风险评估结论或其他相关资料。甲方知晓并同意，在不透露单个用户的具体信息内容的前提下，丙方及其关联方有权对整个用户数据库进行分析，并对用户数据库进行商业上的利用。</p>
        <p class="normal-content">6、当甲方发生逾期还款等情形时，甲乙双方一致同意丙方或丙方委托的合法的催收机构对其进行催收。</p>
        <p class="normal-content">7、丙方同意并确认：乙方转让部分或全部债权，乙方将债权转让事项通知丙方，即视为乙方对甲方的债权转让通知义务已经履行。丙方有权以书面形式通知甲方债权转让事项。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第四条 电子签名认证快捷签署条款</p>
        <p class="normal-content">
          1、甲方在使用本服务时，应当认真确认交易信息，包括且不限于服务名称、数量、金额等，并按此次借款服务的业务流程发出约定的指令。甲方承诺授权丙方根据其发出的指令使用甲方的电子签名认证证书进行合同签署，且该指令不可撤回或撤销，根据该指令进行操作的一切风险由甲方承担。
        </p>
        <p class="normal-content">2、甲方应确保是电子签名认证证书的合法持有人，可合法、有效使用该电子签名认证证书且未侵犯任何第三方合法权益，否则因此造成损失的，甲方应负责赔偿并承担全部法律责任。</p>
        <p class="normal-content">
          3、甲方应确保开通本服务所提供的手机号码为本人所有，并授权丙方及其关联方可以通过第三方渠道对其所提供手机号码的真实性、有效性进行核实。
        </p>
        <p class="normal-content">
          4、甲方应妥善保管银行卡、卡号、密码、发卡行预留的手机号码以及支付盾、宝令、手机动态口令等与电子签名认证证书有关的一切信息和设备。如遗失或泄露前述信息和/或设备的，应及时通知发卡行及/或丙方；无论是否已通知，因甲方原因所致损失需由甲方自行承担。
        </p>
        <p class="normal-content">
          5、电子签名认证证书授权的使用范围仅限于本次借款需求（签署相应借款合同），丙方不得挪作他用。丙方有权将该项权利进行转委托，无需另行获得甲方的同意或通知。
        </p>
        <p class="normal-content">6、甲方同意丙方及其关联方在甲方使用本服务期间或本服务终止后有权留其填写的相应信息，并授权丙方及其关联方查询该帐号的相关信息，包括且不限于借记卡余额、信用卡账单、电子签名认证证书信息、征信信息等内容。</p>
        <p class="normal-content">7、出现下列情况之一的，丙方有权立即终止相关服务而无需承担任何责任：</p>
        <p class="normal-content">（1）将本服务或借款用于非法目的；</p>
        <p class="normal-content">（2）违反本协议的约定；</p>
        <p class="normal-content">（3）违反丙方或\及丙方关联公司网站或客户端的条款、协议、规则、通告等相关规定及甲方与前述主体签署的任一协议，而被上述任一主体终止提供服务的；</p>
        <p class="normal-content">（4）丙方认为提供本服务存在风险的；</p>
        <p class="normal-content">（5）电子签名认证证书无效、有效期届满或注销（如有）。</p>
        <p class="normal-content">8、若因不能归责于甲方的原因造成电子签名认证证书通过本服务被使用于未经授权的合同，造成甲方资金损失的，可向丙方申请补偿。甲方应在知悉资金发生损失后及时通知技术服务方并按要求提交相关的申请材料和证明文件。具体处理方式由丙方自行选择决定，丙方承诺不会因此损害甲方的合法权益。</p>
        <p class="normal-content">9、若有证据证明甲方涉嫌欺诈，或发生应当自行承担责任的其他情形，甲方应在第一时间通知并赔偿丙方相应的损失，否则丙方有权采取包括但不限于从甲方全部或部分账户（含该账户之关联账户）划扣等方式向甲方进行追偿，有权将甲方的前述欺诈情形纳入个人征信体系，并体现在个人信用记录中，由此造成的信用损失，丙方不承担任何责任。</p>
        <p class="normal-content">10、甲方同意丙方有权将其在本协议项下的权利转让给与甲方实际签署借贷合同的出借方和/或出借人的技术服务方。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第五条 用户信息的获取、使用及披露</p>
        <p class="normal-content">
          1、甲方同意并授权，在申请借款、审批及贷后管理期间，丙方及丙方合作的查询服务提供机构可以向中国人民银行征信中心及其分支机构以及其他信息服务机构查询并获取甲方的个人信息。查询服务提供机构可以将合法获取的甲方的信息经过整合、加工并转化为信息评分或信息报告回传给丙方，用于甲方的申请借款、审批及贷后管理等事项。
        </p>
        <p class="normal-content">2、甲方知晓并同意，丙方依据《征信业管理条例》及相关法律法规向第三方征信机构提交甲方在此次借款服务过程中产生的相关信息，包括但不限于个人基本信息、借款申请信息、借款合同信息以及还款行为信息，并记录在征信机构的个人信用信息数据库中。</p>
        <p class="normal-content">
          3、甲方同意若甲方出现不良还款行为时，丙方及其关联方按合同所留联系方式对甲方进行提醒并告知，甲方若仍未履行还款义务，丙方可将甲方的不良还款信息提交至中国人民银行批准的征信机构，记录在征信机构的个人信用信息库中。甲方知晓并同意，甲方已被明确告知不良还款信息一旦记录在征信机构的个人信用信息数据库中，在日后的经济活动中对甲方可能产生的不良影响。
        </p>
        <p class="normal-content">
          4、甲方同意并授权，为更好、更完整地展现甲方的资信情况，查询服务提供机构及其关联公司及其指定的第三方可留存、整理及加工本次获取的本人信息用于查询服务提供机构及其关联公司及其指定的第三方为本人提供的其他服务中，关联公司及其指定第三方应该承担保密义务。/或设备的，应及时通知发卡行及/或丙方；无论是否已通知，因甲方原因所致损失需由甲方自行承担。
        </p>
        <p class="normal-content">
          5、甲方同意并授权，为更好地为甲方提供服务，查询服务机构可与其合作的第三方进行联合研究，并可将此次服务过程中获得的本人信息投入到该等联合研究中。但查询服务机构与其合作的第三方在开展上述联合研究前，应要求其合作的第三方对在联合研究中所获取的本人信息予以保密。
        </p>
        <p class="normal-content">6、丙方应当对所查询的甲方信息履行相应的保密义务，除本协议约定的情形及为完成此次借款合同却有需要外，非经甲方同意，不得提供给其他第三方，否则因此产生的法律后果由违反保密义务的一方承担。</p>
        <p class="normal-content">7、甲方知晓并同意，对于甲方提供的和丙方自行收集的用户个人信息和资料，丙方及其关联方有权按照本服务协议的约定进行使用或者披露；甲方授权丙方及其关联方基于履行有关协议、保障交易安全目的等使用甲方的个人信息（包括但不限于甲方自行提供的以及其他各方合法收集和获取的其他资料）。</p>
        <p class="normal-content">8、为确保甲方的交易行为能够及时获得资金的支持，甲方同意将甲方信息披露给丙方以及资金提供方。丙方和资金提供方有义务根据有关法律、法规、规章及其他政府规范性文件的要求向司法机关和政府部门提供甲方的个人及交易信息。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第六条 违约责任</p>
        <p class="normal-content">
          1、合同各方均应严格履行合同义务，非经各方协商一致或依照本协议约定，任何一方不得解除本协议。
        </p>
        <p class="normal-content">2、任何一方违约，违约方应承担因违约使得其他各方产生的费用和损失，包括但不限于调查、诉讼费、律师费、差旅费、评估费等，应由违约方承担。如违约方为甲方的，乙方及丙方有权立即解除本协议，并要求甲方立即偿还未偿还的本金、利息、罚息、逾期管理费等。</p>
        <p class="normal-content">
          3、如果甲方逾期还款超过45天，或乙方/丙方发现甲方出现逃避、拒绝沟通或拒绝承认欠款事实、故意转让资金、信用情况恶化等危害本协议借款的情形，乙方授权丙方可以直接采取相关救济措施进行追讨，包括使用或授权第三方查询、索取、留存和使用甲方的资信状况、财务状况、其他与评定甲方信用状况及付款能力的个人信息对违约欠款进行追偿，为此目的向第三方提供甲方的个人信息不视为乙方及丙方违反保密义务。
        </p>
        <p class="normal-content">
          4、如甲方逾期支付任何一期还款超过45日，或乙方或丙方发现甲方出现逃避、拒绝沟通或拒绝承认欠款事实、故意转让资金、信用情况恶化等危害本协议借款偿还的情形，则乙方或丙方有权要求甲方一次性提前偿还全部借款本息，甲方应立即清偿本协议下尚未偿付的全部本金、利息、罚息及根据本协议产生的其他全部费用。/或设备的，应及时通知发卡行及/或丙方；无论是否已通知，因甲方原因所致损失需由甲方自行承担。
        </p>
      </div>
      <div class="chapter">
        <p class="important-content">第七条 免责条款</p>
        <p class="normal-content">
          1、本协议有效期内，因国家相关主管部门颁布、变更的法律法规、政策导致丙方不能提供约定服务的，不视为其违约，各方可根据相关的法律法规、政策变更协议内容或提前终止本协议。
        </p>
        <p class="normal-content">2、由于地震、风暴、水灾或其他自然灾害、瘟疫、战争、暴乱、敌对行动、公共骚乱、公共敌人的行为、政府或公共机关禁止、黑客攻击、计算机病毒发作、银行和电信部门技术调整等不可抗力导致的一方未能按照本协议的约定提供服务的，任何一方互不追究其他各方的责任，但发生不可抗力的一方应采取必要的补救措施以减小不可抗力造成的损失。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第八条 法律争议解决及通知送达条款</p>
        <p class="normal-content">
          1、因本协议履行而产生的任何纠纷，甲乙双方应友好协商解决。如协商不成，（凡）因本合同引起的或与本合同有关的任何争议，均应提请广州仲裁委员会（依据中华人民共和国法律）按照（申请仲裁时现行有效的）该会仲裁规则（在广州）进行仲裁。仲裁裁决是终局的，对各方均有约束力。
        </p>
        <p class="normal-content">2、本合同项下任何一方向对方发出的通知、信件、数据电文等，应当发送至本合同（首部/附件/甲方在丙方及其关联企业的网站或甲方授权的信用评估方网站中的信息）约定的地址、联系人和通信终端（包括但不限于：电话、传真、微信号、电子邮箱）。甲方当事人变更名称、地址、联系人或通信终端的，应当在变更后3日内及时书面通知丙方，丙方实际收到变更通知前的送达仍为有效送达，电子送达与书面送达具有同等法律效力。</p>
        <p class="normal-content">3、 任何一方当事人向对方所发出的信件，自信件交邮后的第7日视为送达；发出的短信/传真/微信/电子邮件，自前述电子文件内容在发送方正确填写地址且未被系统退回的情况下，视为进入对方数据电文接收系统即视为送达。若送达日为非工作日,
          则视为在下一工作日送达。
        </p>
        <p class="normal-content">4.、本合同（首部/附件/甲方在丙方及其关联企业网站或甲方授权的信用评估方网站中的信息）约定的地址、联系人及电子通信终端亦为双方工作联系往来、法律文书及争议解决时人民法院的法律文书送达地址，人民法院的诉讼文书（含裁判文书）向合同任何一方当事人的上述地址或工商登记公示地址（居民身份证登记地址）送达的，视为有效送达。当事人对电子通信终端的联系送达适用于争议解决时的送达。</p>
      </div>
      <div class="chapter">
        <p class="important-content">第九条 附则</p>
        <p class="normal-content">
          1、本协议采用电子文本形式制成，并永久保存在为此设立的专用服务器上备查，各方均认可该形式的协议效力。
        </p>
        <p class="normal-content">2、本协议自本文最终生成且甲方点击“同意并继续”按钮后之日起成立，于甲方收到拟借入的借款本金总额之日起生效。有效期自甲方履行完毕本协议项下全部还款及付费义务为止。本协议有关保密、披露等信息运用条款不因本协议有效期终止而失效。</p>
        <p class="normal-content">3、如果本协议中的任何一条或多条违反适用的法律法规，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。</p>
        <p class="normal-content">4、协议各方应按法律法规及相关规定各自承担与本协议相关的税费。</p>
        <p class="normal-content">5、本合同由本合同条款、甲方在本次合同完成平台填写的所有信息、丙方及其关联企业平台各项规则以及与本借款相关的网络页面信息组成，各组成部分均具有法律效力，与本合同条款有冲突的以本合同条款为准。</p>
      </div>
      <div class="chapter">
        <p class="normal-content">——此后无正文，下页为签署页——</p>
        <p class="normal-content">本页为签署页</p>
        <p class="normal-content">甲方：【甲方签章】</p>
        <p class="normal-content">丙方：【丙方签章】</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mobileManager
  } from "../../utils/WebInfo.js";
  import {
    Indicator,
    Toast
  } from 'mint-ui';
  export default {
    // name: "personal-agreement",
    data() {
      return {
        isShowNav: true,
        orderNo: "",
        borrower: "", //借款方
        idNumber: "", //身份证号码
        signingDate: "", //签约日期
        loanPrincipal: "", //贷款本金
        termType: "", //期限类型
        LoanTimeLimit: "", //贷款期限
        consolidatedBorrowingCost: "", //综合借款成本
        repayTotalAmount: "", //到期应还总额
        bankName: "", //银行名称
        bankCardId: "", //银行卡号
        loanPurpose: "", //贷款用途
        payMonthRate: "", //每月费率
        companyName: "" //技术服务方
      };
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
      if (this.$route.query) {
        this.isShowNav = this.$route.query.isShowNav;
      } else {
        this.isShowNav = false;
      }
      this.getUserInfo();
    },
    methods: {
      getUserInfo() {
        console.log(JSON.stringify(this.$route.query));
        let orderNo = this.$route.query.orderNo;
        let aToken = this.$route.query.token;
        console.log(`orderNo: ${orderNo}======atoken${aToken}`)
        // orderNo = "255443712000748";
        // aToken = "2591129865148334";
        // http://119.23.148.208:8084/appServer/orderApply/fq/contract?orderNo=255443712000748
        Indicator.open({
          spinnerType: 'fading-circle'
        });
        // let url = "http://119.23.148.208:8084/appServer/orderApply/fq/contract?orderNo=255443712000748&token=2518116021618803";
        let url = this.lbdUtil.host + `/orderApply/fq/contract?orderNo=${orderNo}&token=${aToken}`;
        this.$http
          .post(url)
          .then(res => {
            console.log(`res: ${JSON.stringify(res)}`);
            Indicator.close();
            if (res.data.code === "0000") {
              this.borrower = res.data.data.username;
              this.idNumber = res.data.data.idCard;
              this.signingDate =
                `${res.data.data.startyear}-${res.data.data.startmonth}-${
                res.data.data.startday
              }`;
              this.loanPrincipal = res.data.data.contractAmount;
              this.termType = "null";
              this.LoanTimeLimit = res.data.data.periodTotal;
              this.consolidatedBorrowingCost = "null";
              this.repayTotalAmount = parseFloat(res.data.data.payMonth) * parseFloat(res.data.data.periodTotal);
              this.repayTotalAmount = this.ForDight(this.repayTotalAmount, 2);
              this.bankName = res.data.data.bankName;
              this.bankCardId = res.data.data.userBankAccount;
              this.loanPurpose = res.data.data.loanReason;
              this.payMonthRate = res.data.data.payMonthRate;
              this.companyName = res.data.data.companyName;
            } else {
              Toast(res.data.msg);
            }
          }, err => {
            Indicator.close();
          });
      },
      ForDight(Dight, How) {
        Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
        return Dight;
      },
    }
  };

</script>

<style lang="less" scoped>
  @w: 75rem;
  .personal-agreement {
    background-color: white !important;
    .main-content {
      padding: 48px 15px 15px 15px;
      background-color: white;
      .instructions {
        text-indent: 60 / @w;
        font-size: 30 / @w;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 45 / @w;
      }
      .title {
        font-weight: 500;
        text-align: center;
      }
      .borrower,
      .lenders {
        p {
          font-size: 30 / @w;
          font-weight: 700;
          span {
            color: #333;
            font-weight: normal;
          }
        }
      }
      .important-content {
        text-indent: 60 / @w;
        font-size: 30 / @w;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 45 / @w;
      }
      .normal-content {
        text-indent: 60 / @w;
        letter-spacing: 1px;
        line-height: 45 / @w;
      }
    }
  }

</style>
