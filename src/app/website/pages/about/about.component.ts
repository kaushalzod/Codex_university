import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  token = [
    {
      img:"assets/Images/about/img_1.png",
      title: 'BUNK',
      subtitle: "HTMLBunker is the first exchange in the world totally dedicated to HTMLCoin with more than 30 top pairs. HTMLBunker arose from the concept and need to contribute to the HTMLCoin community and crypto community as a whole."
    },
    {
      img:"assets/Images/about/img_2.png",
      title: 'XOLA',
      subtitle: "A free-to-community project built using contract-oriented Solidity on the Althash platform. Designed to be a flexible, configurable, yet secure HRC20 Token Smart Contract with XOLA Protection Factor (Simulated Proof-of-Stake)."
    },
    {
      img:"assets/Images/about/img_3.png",
      title: 'Codex (CDEX)',
      subtitle: "Codex token is used in the Codex ecosystem, primarily as an access token to VIP features on the Codex Wallet Bot."
    },
    {
      img:"assets/Images/about/img_1.png",
      title: 'BUNK',
      subtitle: "HTMLBunker is the first exchange in the world totally dedicated to HTMLCoin with more than 30 top pairs. HTMLBunker arose from the concept and need to contribute to the HTMLCoin community and crypto community as a whole."
    },
    {
      img:"assets/Images/about/img_2.png",
      title: 'XOLA',
      subtitle: "A free-to-community project built using contract-oriented Solidity on the Althash platform. Designed to be a flexible, configurable, yet secure HRC20 Token Smart Contract with XOLA Protection Factor (Simulated Proof-of-Stake)."
    },
    {
      img:"assets/Images/about/img_3.png",
      title: 'Codex (CDEX)',
      subtitle: "Codex token is used in the Codex ecosystem, primarily as an access token to VIP features on the Codex Wallet Bot."
    },
    {
      img:"assets/Images/about/img_1.png",
      title: 'BUNK',
      subtitle: "HTMLBunker is the first exchange in the world totally dedicated to HTMLCoin with more than 30 top pairs. HTMLBunker arose from the concept and need to contribute to the HTMLCoin community and crypto community as a whole."
    },
    {
      img:"assets/Images/about/img_2.png",
      title: 'XOLA',
      subtitle: "A free-to-community project built using contract-oriented Solidity on the Althash platform. Designed to be a flexible, configurable, yet secure HRC20 Token Smart Contract with XOLA Protection Factor (Simulated Proof-of-Stake)."
    },
    {
      img:"assets/Images/about/img_3.png",
      title: 'Codex (CDEX)',
      subtitle: "Codex token is used in the Codex ecosystem, primarily as an access token to VIP features on the Codex Wallet Bot."
    }
  ]

}
