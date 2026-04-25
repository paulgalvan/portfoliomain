
“Navigate a maze by controlling your Create 3 robot via Airtable. Your partner will be in another room on Zoom, so you will need to find a way to attach a phone to your robot so it can see the maze.


Some helpful hints:

- Check Slack for a video of how to get your Airtable URL
- Complete code to get your raw Airtable data in JSON format is available on GitHub
- You'll want to use the geometry message type TwistLinks to an external site. to publish linear and angular velocity to the topic /cmd_vel.”

---


![Project5Video-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/1f78954a-0894-4a51-be08-7e39ab7a8068/Project5Video-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OMWYX3%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BpVlP8VRa7xdyWRJqW2X2Xck3et1y60GTPmQX%2F47miAiBoQN5QDvNZLfTQ3AJZUCH3UP3zUNRk%2BBPI1x5153u1syr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMcFZWNZAiAqBd0FjjKtwDxUR8O3DDh9VuRIQN4menwuaY92JGRTYlx5D8c8JVNVAldJ%2FPgikurxLZhSyuiUx1KxdvQn4t0zLVSufBpjMX%2BGR9M%2FtsaKHjJvdqHfCdgQ8K%2BdIwTCCGRf9sZsJSaFOnei8QInkFndDGKH%2BbAOwNFgR3fTdMysMBJObefiqMcRuV7J4KcVXwkeOFernIu2fvXF9F7eZyvUKk%2FX6%2BDfLClyU4HZ4IjC7xKGXSpXUp6wBdS8bycmiPNmyS2KhX8vzEO7NW95prurU300iJWzLrxMNaeaYaqPQRyl37uMiCtAY6r2LV0qkcfAGtiBnGNzltT9KAm%2BFc%2FHUaRWbAdwSgK12IfeLDrwol8lYU7%2FjzXiTRce1ESSsYqxQtCMVZ9QHtdY7oDJwc%2FyyVzQBmP7KymyR5Ax%2F4daQtsLc968Tr35nRl21yUqjmGE58p9KJ5TWXK8UuusgAq9M1jKuKJbVGsOg274EEY6iITa%2Fd8bv5CKjwH11IL0Afu1RH25spnvOOapo8RFmy5%2FGB3WwP6SwR8Xy55QArW%2FDvm7iG6xwtY3O0e3p91tkZUxNfOzXMLGSyIuiaxnOhM4LGkYYNVZgUug6jhU%2B3qScj35IbT16kCDCKYQpRsRmKSe1XmdYwuIrEzQY6pgGcwBflorzQlpMkxt0BMNz9Ji8dPoJ20JyUONQrklpw2Wh8aEhoMOmgAI6%2FUY%2Bpejmy8g4tx2s%2B4eNE5iI5YFioJ%2Bmt3MF0m2VsR7ifN9ofpdhk57snjKFGm7kWMtVzD3ruFertVA%2Bd8yAjibiLcpJ0grARNtnbrrwpJuha5gLj%2Fo5G%2B2r8QjrUi0%2F%2BRgfgRf96FJft47yLL8y69MPI0pPixnawL0Oe&X-Amz-Signature=e796ccdab79af99a1fe76c2d951dd06e84c8328abe5d7c7103323017c4244c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![PitStopVideo-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/55864a03-57f4-44c7-a21a-653b226c4be5/PitStopVideo-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VUFQUC%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL52KYJiOk8ECOYxyHUyNXetBfx36T%2FGUDLDWyEe4wXgIhAJA0jYl5GesVk6kEgOPnJqJtQaKfv2UpGyE7Y63%2FCjIDKv8DCFcQABoMNjM3NDIzMTgzODA1IgyXTH8VCT161MZy104q3AOnxq3UqrmwJGY03rHSd3hUPVXvc4EvSCtnsaLk7ea6TQ3DP2gDpJJJi%2BAfL1VWwAtjTdcWJUizKkpSMIMpoOYuK3%2BnhdCL4%2FT%2Bk7amjdJwZlYMwpcpKVJU63mvuW%2BGuFpM0ekLoTw1PmbvCPkxzP%2FKkB2dbCMy6n6Wk6EJC7mUs8CihmyBkSs68Qn2KuQXNF4Te6MSmOmJ8YXY3bA0ib06i88%2BOzO7HPcfdpkbd%2B3NnmjN%2Bb3x2qfJMKD1PDO7k9RiugvWw0eN4azmzNfTh0wueKIuk8YtnMp7GevVyMrOJdsNNVPCyue4HN%2BX%2Ff5TQdB0DzcWE1tKQuBaVvl5QHN344M%2FxHRtYlmarO0ub8TXtwWh9NeTjoNq7BGQO%2Bw8BgZzGRnZ3Ia%2FdY1%2B6oOCN9fPwBHRT7C%2FkoJFAZT2NXVdhotwl6cKEn5Xs6zGRrBNAjKylcso4dKts97QHH0CJCbxpnM4eB8i8dQfD5MBztASasaP50OkF0h7l1Ufatn0ixgWp9ED4i8Sdxgmt%2FSRvk0kZhZqidty5MPSvLM9wol30ChcpkhE4w2gz6XIUjar%2B8ucbkac4VXkbQL5mhOEYx3iELIg3tY12i6tPRtDdmhX41p3z7B7Iv0%2B7XxuPDCTi8TNBjqkAeX2LpFSjb%2FjWXIpb%2BjqRrZiN7pkQbIKrW7VdDEPbvQSh0I5hbhcQwJUyjuN%2FnWOGK9qczavScoIgoKwZnWKkz58pa%2BI7N80h9fQ%2FnpZFcWP5ahZpEaryJU4z95kew7ooB7f1X0aybEXG5mHmQ569Y752ECr%2B%2BetVEySZY6YaXPN00eZSEVQptvN7YLZbFJC8EdadwltOXiiMlmaikpIC6tAezg5&X-Amz-Signature=3a16adeb0a219fa5f927bb508324cc7df29d1e3e6f75cf0abec2c27c06fb46e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## iRobot Create 3


![create.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/49afc5f3-f09a-4a8d-86b8-dfc620d92adb/create.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXDE6OW%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEN7UAbiCOtAwACsckAevalh6O4neLaGkxhRF%2BFNQ%2F%2BwIgPmU1y5b3SoBwpo3eyyvl2ApCzxLWE%2BKlpTylhh2IPWoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJNqZAw%2BjbuzitOEOSrcA%2Bne3ifDT7RDFz02zupFYFlbtJzPjPaNy%2BoHQZ24qtmdl%2Bpf0e0DdQlcKSQDeQuJxpck1gdmbWXlPb49jAxnpmQmyMjZhnkxy7BK%2FV1Dea1h8rHV1b4nMAvsg6GKnKn%2BfYkAhRZVzDhrutmPVst2qKw4QhCaySC%2BbkwZcFvRh4LCDuY16wWjEz6JOhUO4HlncejcxPefiCILVrBKtoKCHJPVkx7oqIYy5l4DaPX4pxAM04lZvgPAU0EAf3at7Moes3VuBDP%2F5TsHirLl7ZG%2FXL5%2Fl1eMws22uGhlpEf0VNQCcxtsGmQgpTmcnVfJratmqRmidCFGR0ydt2Qs3KOZNgf2WDbBBFYBES8qxrh44aIsGS86uaPK6WvMcm77An63dMY7LRm%2FHXna%2B2RZI3dP88rWwuvc%2BYEu3K72bVoCJN3Y0yiXD3l1sleimpl6zDJwxDduwl5BYfktVXS0wg%2FDrbQWXQK4rt5QPLsUqLSHPqE2a8DGrwTFr2mIDys63zlOHDp5E7i6xvDWCHytnawZKxwaPOOF9dJA4ky35UHHWJZCufNZVkgqy0aHM%2BVUc3DHqEsKxX%2BSAMpD0Dr5SwIRElVIpV9gOniO3kVILt3wvRJul5gv0THXfJ1%2FjHxnMMyKxM0GOqUB03xa%2B2a5SIuR4qAUSvhUvf3JCHV%2F3oJ%2B5HxrZimB8ckoB%2FA2bJ%2BN7H%2FOeu4NQ8xBHih2Jpqa9Bd0pIgkRf5fG6vOtZSLjK7E9pFfsMABIbj8ZembLtY3ny4Z6cX4KnBXAguIJBED1p38Vx9T%2B29RmqTLVaWxMSF7woDxL1Qy9Nqs1DLe%2FAAK2vk7YVcAufD0aqQvUv52oqybZ9F2XoNghTnbvjIr&X-Amz-Signature=b6df6f77460fa2e2fd71ccfa5df02a67c342311887c5138084f0772413eebd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![Screenshot_2024-04-08_at_2.07.43_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e1d5dc48-36b3-4bfc-b06a-7a229577ea78/Screenshot_2024-04-08_at_2.07.43_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PVFRNV%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7JF0ttlwkQqt%2FqMNaTW7cNRLtVzZ%2FG3AjBT56NJ3FHAiEAt6mcTAyM6wK8ixXWi87yyWMaKa49RSzNHNAk6wTRGlcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCSr9yXl4KHpemvgNircA%2BQK%2F0I1nC2q5HCrGg8CsvQtIJbZNjm7ydwS5s678dSKHzZSyNe8psmC6vTIXVvTKFeMizebCCzr40%2BV4SbALAAQ0a%2F1byxuP2a2jKF0kGG%2BupFoxCHlHpmkqK44jiU0W1oRzaFVEpIMrb6TtBBmECYiDPxUjFD%2FPpxN7IMypBbgwptCbLZDVnGiP%2Fs1c2ssSgGWa4%2FZQaPbOfZK1VVSBpESMiphpRGFtkC%2F4%2FMnKlOWMrzv68NgeBnttfcLt%2BmsRAOR0o%2BVHdldByTSftppeG4raNiNHhba4eIMBBgHlOb3CkxG8oyF5dRzv0wwnRoSRcT2Kdjc5ViYUAbdUJxxlBTpNWookANPwTUU71hYsxJ1BeXp2vTeLPccdONx%2FjFKsVrrFy4n%2FGZyxmvWW9Uxxux5NGC8S25khlUQTrV3VCA8YBZN851Plx%2BpShudUy6naBNAqoiFCeOLGGbbhMuOM9e56p4ZrIe1kuBDw10BRL7D9yXQZd3vIxCt82gWklvuFGFJAuomQjjT1JmNsclz9Gh1EUJ2iWklZlWinKols9XPbEzp3PSY8H6f3A6%2BZaL1jdkTLiXG6sXQOs7K3kkvixnZGJl48Z0aRqcF6OQjzPu%2FYeM3DtZRrxhWo0gTMLiKxM0GOqUBx0Zlsw%2Fg2Tp%2B1%2BYeYNONZ7t%2FZ0Eg6CDqeFlVFXW5xd4Xv%2B9V%2FOhndjBV66TcPrbLg8qa4X43vOvJYdoYsAaDIT2p8O71%2Flw3MQqWtP%2Ffgm9hRVE4CbET8ybQ7UCmlBgiaJFJcAfAVkiwxKflPNjHRP04XAMbQB7whZ06xCwrv6375Eu56pda7ban94qtnfNwPTqPS5rP%2BFDUN5ENP4crxpnFX5sx&X-Amz-Signature=5fd31edbbaea2a63f6fc6b248f46570e44884704ccaba282176a1090f22ffa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The Create3 is an iRobot mobile development robot that allows users to learn robotics using ROS2. Its base allows for mounting additional hardware. 


## ROS2 


**“The Robot Operating System (ROS) is a set of software libraries and tools for building robot applications.** From drivers and state-of-the-art algorithms to powerful developer tools, ROS has the open-source tools you need for your next robotics project” ([ROS2 Documentation](https://docs.ros.org/en/foxy/index.html)).


With Python on a Raspberry Pi, we can communicate directly to the Create using Nodes, Actions, Services, and Topics. Below are each explained:

<details>
<summary>Nodes</summary>

Nodes in ROS 2 are modular computational units that communicate with each other through topics, services, and actions, allowing for distributed and scalable robotic system architectures.


![Topic-SinglePublisherandSingleSubscriber.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e674cc55-7be1-45be-9df7-04aa0cc0b1b0/Topic-SinglePublisherandSingleSubscriber.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSYDH2W2%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxo4giuMpL3XSQIzd4YF2ojKtKpsx4T7ycPfq3Z0cdGAiEAxPqwxQVk8JbFJtTeth3LPWSfQtFTIVARItqfIjrpDHIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAcna%2Blr1W9McOy5tircA8VFc4RUSOTm0XhV6%2FCHWxz55ZoE6BMeVJMG0mYoAuH6ryUDITApI0YtnCJ9RmxCzgo1GvgFdekrfAdZxSod9%2FT%2F9IrIvYRs%2BOiI3SE7Dvih6QCVJ3OinnyyisJLN%2FOojSs0VfqlM9lnL99ArneY%2BFFk0FPppdJ5WGBCvgl58XLede6d2%2FkbMImYqEEPnMUDiPLe6MtBgnlifEHEsQErGJ79w7YwvIs9SnYE%2BI%2FWhnNAfFx79KfR9dBPLb9RBu7MUpyjnqbATDgTvNriuvoHBki53lwFMngNkBCCy6ablXvCK6X%2Bx%2FC3f2qCs1%2Bc0qDSpaS0utHa%2FDKCtqfNS%2FHmGTctstOw5xaBrfkY5%2F02PQIuJ%2FMd0SWT8mkGc3jBLqRogVbxZUGL0J6lG%2B%2FnpivY2qr8SAE8eHQ9W141cLV2PlSxxdhymBNF0LreWJwEFe4xlTzWsu2IN4ZT%2FMsXBC7qLUYdVJNjQZFnmIYGAGYzqv4fG6ZS1z7ftJaHvHFGx5rnMuXcp3eg%2BC1FBZEZgf%2BcQxZg3LRQHzLcL9IQu%2FY%2FJZA1DI0XziOGlhES0XDqZfhxK3aKWCMQB3oVi66uGH0AfAdSZHdMA94ZbsvGxnYy2veeHcIm2GCGF%2BULGOZoMICMxM0GOqUB6g0d6gArINdJZ%2FoFpvMheb%2B1fWLivD00FZDETrgAvZlq%2BJPakKv5vLgb3e4YMLqm10M7sY4oD0FlQR4FO5gWkt3X6OebY0wAp9uAY%2Fk3a0%2Bn5yX%2BsmmvsvUujDUd6IYbTsqARYRwKQDsGXfltMbT3sjozUkbsStlgH6cXJ7h817FmaLciSHq3uDO7RZ2PtDY7inAx%2FwVW6IF0xDo2hhLE8s0XMi6&X-Amz-Signature=54cc84e079bb02c3cd1c6ba2a586310428fef904154ab5b75b9214f270f4d984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Nodes in ROS 2 are independent computational entities that perform specific tasks within a robotic system, such as sensor data processing or actuator control. They communicate with each other by publishing and subscribing to topics, exchanging data through services, and coordinating actions through action servers, enabling flexible and modular system architectures.


![Nodes-TopicandService.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a856cc38-8a49-46ea-9c1f-55c354e46394/Nodes-TopicandService.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2Y7U6U%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSHr742kORlAitj6fXcF8AiwY3ehzkvo9Y%2BJoniCDrlAiEAsHYZNyqOf5t%2FLXQVohYfprSYY8v%2F4QsXThnyKh8eXGIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIqfatpBourIL1wVeircA69WUZ7Oaxm4WrYWNiKwAGZAqL1Z92NiCJoc7SWLlRqxB8RUpF%2FdgKDe34PEIlIFmGv5fPy%2F4BBcD4zGpOuKjcynMxhCACDKkd2SXYc6rqISU4mL5XVMrcHGbXVKgbFGgq%2F0s7Lrf1Olsi%2Fcsj%2F0mQzodwhO1PIJOk%2Fvh0engPfYv%2BcHZYiYvQh%2BRn87peeEKauKv0KLx1FRW4WOZ5Yygfdy%2BIgBCum7HpmMdqrjubNHKqk1oi6wgu0N22r2M8H8UbXHBs%2Bz4I1s%2FdcZrzzaprU%2FSi4Jz6UqzGzzIuMD75Hotj0SI0aKX4YMuoqppRZocejX%2FLNgS5t1GL%2BKDDK7Kh0qcDTgxF4KsDtiQZAnBNMj5HqEk62A5681HFq1ghO6%2B10sJT2Xvb2ynZPhmaxe7kjtqYIhXSCxk5uXhHeZAqKncYYpaaCIcsvDFl7GkXqnfpMTLSzD25MACwFAcEu3kGpDb4nVHM7pXDK%2BnGxVakZIOuaLsGc7COgGvznl0uTXMCLy3DBXhLk5lMx0wVuDOy34sZe2vmviAp%2F4drj287Q7zvi%2FVksLqh%2BpevRmLHQ6lRLPgxLsekaq4H06kEI5RA3hF6w35Q9h8X21W%2BjxktlpnIsYHsbpEtWNzHt6MNeMxM0GOqUB4wCodFLci1jdDB2Kf29kJEQtM7gAQzSMDDSwAaEkScjtVIAjJAiTDRJHj0p3mSpRvPwMehJNRuu9NhqoGOie%2BtIVE7bPOiNw9UzOdEax7vjOVqdofwrON3baVI1ucA8UyPRCo7iwylmB39L2wJrSy0aRIW3iHghUK%2BDJlacMUXa2equWIlI1k6ds%2BVnVgBuO7CyrkXBQbnzmBgA9xOsibWOJcGhJ&X-Amz-Signature=43ea0829f6e50762dbf40a70cf8e8f5e6b38e37903a499b0a0088ff882ea7bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>Actions</summary>

Services in ROS 2 enable synchronous communication between nodes by allowing one node to request specific data or actions from another node, which responds accordingly in a client-server architecture.


![hero.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/76c581a9-d2f9-4348-a751-02f233c3ddf9/hero.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMWKEV42%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1nyC2SiSAKeFX9f1mMoH6d2HTAZVfVBWJyflrc98SfAiAzYZwLCZUDw2fKzHCMe59ROaKmePP9B4fs7HSwzp%2F1Tir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMcG%2BRpFxK8KSY7qAlKtwDdeML7HbnU%2FVImwTHfpfle4xfEnX%2BU0DxFKbgyYbXB7NlV39DyXROh2LppjDcOkEk9lMFH3DWtqLfpRNZJM%2FEsqJcUUnNlxsY5sleGGbBJ62m348rcD9YnpHe3JTm1ePluOpCqax07JmmOUXW7LwxSNt00XU74KA118L3XdhZRxPaAbgFTDzirtNY%2FIVQymjfPYVnhajq7IbAvhJiSKyO%2Bgz6GL3IB0brXtzqjLr8XWfqRzzYPQ7tQkscT4Z0obkaRyku5blsQMC0my1BcYr1G4O0dxhjIToRizCkMpB0slwKdtcdSYAVScJfhuPmu0vvGm%2BDAjV353BP2TBy2UQFZNOBPB%2FElfIbeaGn7zoYjbjxn3GAnKy47ARMsfz0q5cCZlvVqXqCbpP1t%2BPm5qHJ4u5hh5ZgLBhYWOCHXAjQAE4ZEV5EZoy1jQQWIVX4NaiWSsjZyF59zePFvF307txr4nu9xzC2C2fhbSBaYWweeTBwcrrphhfbd4%2BVxfuvyT9Sr3epkmN%2BT1MEkH%2BQGDZmYcLn7s6QDSxYo3CfLxkMvfB3B%2FTMbeBXlP3BjH0wweLQtR6D59%2B%2BmrcS1k8uUqoeXy%2FRWvYiCYj1SN7RjT7V3uqkWm%2Fb6YhIuT%2BuMugwiIzEzQY6pgF8kpUcTyBtmrQ%2Fco5WLh2R3DmLbCG8pXLNpsBJ00m7zjh9tj9uvh4Bahfnwmv9rXdGAHt%2Bz2F4B8%2FJpDtsy37TnymGwkEhp3mjvYFtI1O0arWl2GPCzGFrSfy6UikLe0CWUnzEOYuNvOQ73NeRe825Nl%2B%2BR48szBUAUNur1LFvSyUaN2rFGw2O%2FK35EzhHehnFBNuYuxpFom7d%2FhXwKSUSY2V9xCfU&X-Amz-Signature=db90706882bb5d4f5b143c177eb30f49b4639ca6bb88c09627659586fc29c392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Services in ROS 2 facilitate synchronous communication between nodes in a client-server model. One node requests specific data or actions from another node, which then responds accordingly. They employ a request-response pattern with well-defined interfaces, enabling nodes to exchange data and perform tasks in a coordinated and synchronous manner within the ROS 2 ecosystem.


![Action-SingleActionClient.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/7c1615f6-ab13-492f-94b8-39c7078c9100/Action-SingleActionClient.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5AKPXI%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9%2BzdhWdFU5UzEJiSDkJI%2BSdpJVeAXv6PvF0DMb%2BIkvAiEAtu5I%2By%2FpBXFCsC%2BfAyxSc1imfI5Qd2s7%2B1W2w184nAQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIjVoP2JE1fRIgojCyrcA6x7tCd1zo%2FmjL0NpfEbDT206xtjDq1gP1Z7%2FpuwnvtJmTPc41V016%2BaYRozRzo03OhwVIxZszFLlIfceeKNT8U%2BfloxZ42RfTiU1kwsAJ6TYTnhC%2BGd%2BkmfQedTbNFVoDuFSzzoNwIx0aLqdZkT6hZp0FxnVtzZd3UNGBzNdlvXvSAKZDICwfBrfE7RYVzqfi4gOBASKxQ1xiqbOGZJ7t5c6fZxUiux915%2FMg6Be3DRGLV8NXDGWmgLrJ8L5fqPKfqiA7MUX%2Br0v6gvOIozP139j7hpVyXvauIGmM1E5aPrnT6ElKzlCHD42m5uZBfYQeEnTvvQB1GGk2HvpjtA8RC3n84Yw31sQslD9q4%2BT%2F434y9jbLSdeQYFj6KWl1S1R5UhXto9r0ZULqi4okXao%2FhmZ2XOE6wFGclxNXzr4Q2cRVL9LvMoTAuf%2BNN695Mz%2Fz878z%2Fplz5uj8T25Paa8SL%2Frur2Q4FOL1%2FozagTgn2QDxWZlV2D7GLn80uteK0jo%2BoexsYmlRbLO7V3tgdTnw3eBVOSuoAsJBH%2B8u6hlHpbzr8%2F3LIyN4r5mweuUdH8wlJDyA8j0IYO8ZhrvQdoPd9yozLJTdrG3ZELel5UyD8zBeIWjeTUXPZLA5oYMKOLxM0GOqUBl0WFpcOhdfZsrUsVx3hnsLp1RFcplvtSM8T6yLMJotQ%2BdPWwYneZVan%2Fh3KDtuGAMMuqtOuWUhRpb2uTqss%2B%2FEWU8VRDbgIAjAMb52ndKyRi%2FDsGLn%2BxTf9seo9Q4onjB29ZvmAZVtRqayJvTT8N4EPcqAOK7wNZPubbB913gKm8S4LSn7TWtKcSsrpu6pFRgs7NtZjw2jtm6lwbOWtzJsS9KybD&X-Amz-Signature=366dfc32984ddc7cc3d8638b8a43db28ac970994cbbe5d6f00ac86af9e46b661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>Services</summary>

Services in ROS 2 facilitate synchronous communication between nodes by enabling one node to request specific data or actions from another node, which responds accordingly in a client-server architecture.


![hero_%281%29.webp](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/f2f35e0b-2516-4405-8473-41fbfb3561ef/hero_%281%29.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT33VEK7%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Be3Jrh5A07baowS%2B%2BYCee9oWPjlIo1plbFD3EMsGhhQIgAZDVJODWaY7EylUirj4ChurRh9zT1Y5lPRYFRG7DHfAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDfgKI1RVXDcxZcinyrcA9OYaAha3nnQqP8OPZ%2BdM%2Fas6PPRoroFCiDQBVggVgLIxID%2BOM%2Fl%2BCLzpVmYa2bvMTSN5ERzfwULeWGadG9M%2FXU4I3JfxtwXaEHgthWCC4O%2FjaRa5La5PJ0g%2Bls8YymyM6peu5JQ%2Bx9UbfHhx0SJsHVpDTEMK2Nv0cwlcRzUv%2BlhJJz1bE8QuJ8CVUPv%2Bocet5W8JKtIGOZJ9beVJbGi4Q8zmfqjtOP8haxZytxcYmoA4jVDTTHNbAraWrIK9Z9T0nfmkMUXWTrmmU%2BDEV01EQSELlD02uMzPE4CtQxYwBwRejkb1UuqLVQ8VXTHHfeKw7vbWEsEMsbyRF0txlo3hAFpnlv9LAebY%2BG4EsVS%2F4VNWKQR5AP6HCE9f6YEgL1d1vIes5ga%2Bl1BlQbh4CJ0WOchKnY9YnWGUmuMp6O9xNUJgJXHcmrVI0S4BoDhyG5xOfnD7pjINWUctb6S2we5xDSGCMcTiWS2puAk5bCa0YIyXu9v0zqJoSA1kUQxtS4QbSQzRST6%2B57Ny2WAXzV3sj6SNBTsh1S2zPq9HFe4zUhz8un9lxmw5FE9NPwpJrEpHwU47pFOUl88E35%2BqeMNDaHNX8qHtwRL3pl0kFjGB%2BuFMYvZyhHfbHou1DBLMOCKxM0GOqUBZjlSTJPFrqEseyqITuohuOIgpt7hBhNuZ6LTQ6gc4eo%2BCfP4JIf3hHfVq9JYIYrnwCW9YI1YYqHGAGHkqYzAIeDHhdYlgbxIipfaerCzUi%2F8indoO842jNQVAKyboXuEPUHEDKE%2Bcvf5IXWMMB9vtYIzXCads3WFpEue1jvpJ%2BO4E8KQwAhA8E3fzB%2BTF7Aegxc8M%2Fd1vCRxHWExCLoveKd6COWr&X-Amz-Signature=9325506537f0e7bfe9dbb2543b5ef1fa6000094fabc93b5cc8056d7c23e83a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Services in ROS 2 provide a synchronous communication mechanism where one node can request specific data or actions from another node, which then responds with a corresponding result or acknowledgment, enabling coordinated and interactive behaviors within a robotic system. This client-server architecture follows a request-response pattern and relies on well-defined interfaces, allowing nodes to exchange information and perform tasks in a coordinated manner.


![Service-MultipleServiceClient.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/a1efb67e-1c1d-4276-b9f4-b6d5c527be23/Service-MultipleServiceClient.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZZAMTK%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtyyH7k2JV94JMK4sCDRau5Oka2%2FIZ28sr7IB4xd%2FIHAiEAmVKYq9ndGh7bdUR4aFVvKBypdkTePV%2Fg5Aki2380yRwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEuFub83JKhuBr5PvircA7ia0HnQOMn5dhdfK6ZmzBK3FJul9jz0vuE7HnKEe9YDjpeZB1J1i8akRssd8tbf86YDfq2%2BcIdyW9tXoXyq%2B87K1qFQw4BtU2esTk%2BxdWCIMBM2Cc8ljLj5%2BCpJc5IIptwgwH7xrMqa06OaiU4T91B8%2BZ%2FjEhlzEm%2BVYiXVwpVYu8VnNo0wYAhFMOKWORDLjutlIaHQYWsYsk80ST%2FS%2B67HsTyrvLeYJG2BqHciKsR0ThXcwThuxKxg02VJD1WednmMLTDQtc%2BH4%2FCvW4dLSNEwpbIFO9DAk4rgjamofVeyPP1VtcJC%2F5JNqXWnCw21mXR7cnc%2BepSFO%2Ft8VBrNMucxt%2BBqFL2KZ097sTj5C3e4d%2FHwvTCFol%2FJSjfckrw2Et%2Fj3F4VPm7RyYfbRT2CrFp7u7oX4AoPh4uYTrHRnBLDeLxvM2e8WFmrF79QCbC4YjqIl%2BqwEc0MxTrUi%2BHka9dfNXzA9JrXsvx2uZhXQ32NHqwExSzGn6ScFd73w3BGvl5aSkdTjR6TPNtWi6iOuIIXJ7DP07RQ66wSJOoZVFYpShvFMbWfb%2Ff67iaMnFkS%2B0WpwfniWF7IuJlFWnITDaGZX5j3sFeWHSNxz%2Bn4jW4%2Fk%2Bfvwjhl6PNHN49uMPuLxM0GOqUB9rbOnc5dMhcZJvKqKLuvCFU6t1TBf%2B2PD9opjtdmNRczRYn7BX%2FWjC0wtZlripR%2FbYscoJWAs4lY4ALi8cp8Kg6yI9MzECvnuRAgQThYcFXLPsa9awlJrn%2Bfb5vE%2BpWmdNypy8HbQJbRoDtjI%2BTdS2yBVoBFm2RKwwJM9uG%2FvH%2F8V%2BW%2FkumooGA%2FXalYylcUFIeAwdSHYUjXb4Q66wlnmn9A6pGI&X-Amz-Signature=4eb5babe5a969ce08645dbb5c7e2f04a5242b59b22e99a2782278caed0e6fc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>

<details>
<summary>Topics</summary>

Topics in ROS 2 facilitate asynchronous communication between nodes by enabling the publication and subscription of messages, allowing data to be exchanged among nodes without direct coupling.


![ros2-topics.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/560d4deb-d7e4-4626-863c-00c2de5ec4bb/ros2-topics.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AV2KBM3%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnA%2FdFv%2BXb1N8tVgHwgPjotq0bP9gRWl%2FH6Lx2t59zZQIgA9DaEAkfXwqtwRYqWwaJqZlZMPZ%2FnLE7aoKrRl5NvU0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDlahNOrbwNzEmeWyyrcA5m2gJBydII2TbfqwaRFA2JE4UzzUMLVqCNbmSsy9LlJzTP8Iu6bYs2MJ3aATvIvVg87fWw4LhaWSGMr51NzktP98xjQ29ITAyQ7scAIyStJnepUc%2BII0IdyphrIVrVwkjdzpw7PSr2Em4uEv3ny888x8adZVTeg3x1grJEroPVNEyl2ceC4VFw9Eo%2FVe4yWHZcKkvRbh6zhbK9t%2FVssPb0l2sE3EKcNOBf1mY5e9P7ekQcZFQBiMa2UxgpTXY8pXpDYMC6wvqZ8YnajYMBTHAR8m1lRKDYM8iMwiFlRPpTIZuaadEY7fCuu5%2FcugqdBlSaPTDqjE5MdP%2BQqjatBBoHUxZ3G382tvU1Mt33fuEZonD35CpZ6llfzosn9JoC1Oav0y1NzJVgeeadf4JKMO2q%2FepCfA0GY3ykd0QyY5HYBZAnw11RCe%2FY2cAyrkOdPDvfi5tnZQfjt3PE1OxjFwCugrttx3H5XMn4iI8Lhxsp5sp0z1JngR81c2ZEpssnG%2FIEznA7UqXuRcoq0xn8%2B0b0MGrIBG1jB7eSMU66NaPwj8R9hFpzGgWye1EQGt7x1WSviG9MTe7yK430qG1ljwLSl%2B9W9ukWXV3N%2FRdnR94EreOjI5ZC%2FgkLlcUivMJWLxM0GOqUBA0oe1qUYhLk7%2FqMGA2CR7DgaiYT3lNAp1MZl%2F3tnytMc4oZ4fnCIWk5VTWv1nR%2F%2BXtq%2FFMWp0fDRoAg6MC0Y2bnrA7TW0M43FqNgkiKnWr%2BYPyjpJeWry4bk1cSRN2SAlfGQQXa3p8eqerhNIycJWXYg%2FVe%2FbBPO8xtGAgHGCAmlCDiPGurtknWC1YjcGFVucxRo8pVT8M9yh%2FPcqrWGDTEFdW5w&X-Amz-Signature=d5fa7c8d3f764478d9c1f4c408a6090cd5d6b7d22231a39429f33ea244414a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
<summary>Detailed Explanation</summary>

Topics in ROS 2 enable asynchronous communication between nodes, allowing them to publish and subscribe to messages, which fosters decoupled and scalable interactions within robotic systems. This mechanism supports data exchange among nodes flexibly and distributedly, facilitating modular design and interoperability.


![Topic-MultiplePublisherandMultipleSubscriber.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/dbf45a88-108e-4a28-83d2-7c8cc56c102e/Topic-MultiplePublisherandMultipleSubscriber.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVEVI2L%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC02gMff9kqqHkzPTujulKNphgBD3xVBz1PvLue4BGkkAIgLRK%2FNgJUaXRjwlhpCsXEaDzPSAqZXA2jDf3wdyhzuKMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCYT09Yk%2Fl0iXIVqnCrcA4MYVR1tJRz1HVjqqt%2BY7eOBjuIxEB9V520WpMsOtvN%2BwmQ0%2FEbpEpIqVZZbtNNg0%2FvEn5JX7OwVPfHpDccCWH52Wz8Q8Nwc6GW6zOCyoafH4ecGZ0Al2mF1i912t42C9BcMukATIE0jrl0%2Fo%2F6L9q2ZIEC0IRG3oe4onZXWWRZKDVOXpZ8r5ZIb7%2FA6pPU1hWmhKnXfq0OLTIuffhK8IRkCi79Z9b07tRuUg3hiinPt6R%2FUU04cxbDStwRRBFSLU143GsBE%2FLDP6nQ9JD0GxN79C3gPNViCk3Gy5O9tDw%2FjRgy7Ls3tAd0hInRlvkBK%2Fn%2BryGBgMlwM81Tf0vZc0QEWpOoOadJbaZOyQMFaVOuhQ1yPrQWyZ7Cg%2FDdTpQWwE085gsb49i5DdMAd29ARmSlrOavJ1f2rlsTqA9%2FLfAxiviusMhXQLCyk%2FQdkv48%2BizRUat0SM1opv7uLPGPVdRHZm%2B6NR4Qt8PJ3d5QoMzH%2BFbL1BOQ56p10UoY7GincCa7xTz68c5WKMINPzCJamnZpUbIVuDft9NtFUEci2v0qxTGLDH%2B8BG4vKTOCB8mJ%2FGBQATq3iJO7Nuiqs9uNiCwBm3NQkyz94xiZ2j%2FuB9y7Voi9%2FJlahMSZZn00MNCKxM0GOqUBp1toVxi7cx3JtwFud%2FpC4sl5P6Zniq%2B9yFPbiaclhgpFP%2FT9HABRTMrd0qFrOtPL1UUMsALaC8rDNP8OLFRnWDgcR%2BP4sVqCu2JndYsYvyBHa3hbvHtapF8%2BteGcJsSYQQ9Dr0BJTRRjGAa5Rqjvb4zTe7RHpJ6zF3DCKwKepQn4s13HTAhoQum0PE%2FHqu4csl%2FHLFR%2B%2By2AUGlsjAdgkkhxNHZ8&X-Amz-Signature=65fabc0edeb60339b132b008554e673fa9f00f81ac11b249cab84e0d9e33fa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>


</details>


These all work together and allow us to talk to the Create. The Create alone has topics that we can pull with commands.

- ros2 topic list - It pulls a list of all available topics
- ros2 daemon stop - Stops background ROS processes
- reboot_create - reboot your robot from CLI

### Example code


![Screenshot_2024-04-09_at_1.41.21_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/48a8125c-6eb5-4115-a39a-9caa9c0373d3/Screenshot_2024-04-09_at_1.41.21_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=f1b3795518bc003a309209579a325871072cf27c753c09b79dd5ce7a61182d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


This is a command that publishes a string to a topic. To receive it, a subscriber is needed.


![Screenshot_2024-04-09_at_5.44.26_AM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/0fed8195-e6b1-408d-8e4b-7dc12abdd025/Screenshot_2024-04-09_at_5.44.26_AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=3a44ea5f9b6996b95aad3cc04b87e55f9de82ecc5f21911dbbe1ce2cfa4420ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The subscribed Creates can receive messages from the publishing Create.


![Screenshot_2024-04-09_at_2.24.35_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/bf82fbcd-fe11-450b-88f1-fff5560efe40/Screenshot_2024-04-09_at_2.24.35_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=8f7926bbdd4d2d4454f9306cfb00a5cfb41132cd5423d9da887da7ce244b822c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The following line of code was to change the color of the LED on the Create.


This is an example code on how a publisher and subscriber are made to post messages.

<details>
<summary>Code</summary>

```javascript
Code from ROS2 Docs
Modifications by Briana Bouchard
This code creates a publisher node and publishes a string to a topic with a counter every 0.5 seconds
'''
import rclpy # imports rclpy client library
from rclpy.node import Node # imports Node class of rclpy library
from geometry_msgs.msg import Twist # imports ROS2 built-in string message type
from geometry_msgs.msg import Vector3
# Creates SimplePublisher class which is a subclass of Node
class SimplePublisher(Node):
    # Defines class constructor
    def __init__(self):
        # Initializes and gives Node the name simple_publisher and inherits the Node class's attributes by using 'super()'
        super().__init__('simple_publisher') #change
        # Creates a publisher based on the message type "String" that has been imported from the std_msgs module above
        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10) #change
        self.wheels = Twist()
        self.linear = Vector3()
        self.angular = Vector3()
        # Set delay in seconds
        timer_period = 0.5
        # Creates a timer that triggers a callback function after the set timer_period
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.timer.override_system = True
        # Sets initial counter to zero
        self.i = 0
        # Airtable setup
        self.airtable_url = 'REPLACE_WITH_YOUR_AIRTABLE_URL'
        self.headers = {'Authorization': 'Bearer REPLACE_WITH_YOUR_ACCESS_TOKEN'}
    def timer_callback(self):
        # Assign linear and angular velocities
        self.linear.x = 1.0
        self.angular.z = 0.0
        # Assign linear and angular velocities to wheels message
        self.wheels.linear = self.linear
        self.wheels.angular = self.angular
        # Publishes Twist message to topic
        self.publisher_.publish(self.wheels)
        # Prints message to console
        self.get_logger().info('Publishing: "%s"' % self.wheels)
        # Increments counter
        self.i += 1
def main(args=None):
    # Initializes ROS2 communication and allows Nodes to be created
    rclpy.init(args=args)
    # Creates the SimplePublisher Node
    simple_publisher = SimplePublisher()
    try:
        # Spins the Node to activate the callbacks
        rclpy.spin(simple_publisher)
    # Stops the code if CNTL-C is pressed on the keyboard
    except KeyboardInterrupt:
        print('\nCaught Keyboard Interrupt')
        # Destroys the node that was created
        simple_publisher.destroy_node()
        # Shuts down rclpy
        rclpy.shutdown()
if __name__ == '__main__':
    # Runs the main function
    main()
```


</details>


More example codes can be found [here](https://docs.google.com/document/d/1CgicImI5o6VIJMICzk-a8_3mIWFpxt-_xzAb5q0R5ZM/edit).


## Airtable (API’s)


The next crucial component for this is the way we used to communicate to the Create. API stands for Application Programming Interfaces. It is used as a set of instructions and protocols that define how two software components communicate with each other.


An example of an API can be found [HERE](https://bump.sh/sarbor/doc/taylor-swift-api).


![Screenshot_2024-04-17_at_9.17.33_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/182e4aef-f796-4dce-a1ee-720b806b0cff/Screenshot_2024-04-17_at_9.17.33_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=ac24de4210cdddc28cf5a1143c0f4df9d2dd3e839a1706cf8dc12c9ea1a6e0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The interfaced we use was this.


When values were given for linear velocity, it moved that much in distance. The values that were used for angular velocity were in radians, and also only allowed spinning counter-clockwise,


![vid-ezgif.com-video-to-gif-converter.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/75294dd2-cd61-471a-8884-9ccdd9c3799d/vid-ezgif.com-video-to-gif-converter.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=6ddda03ff93eb2cac874de5016aa4230d5309170cd21976a0d45731b2257756e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


The code used was to control the rotation, as well as how much distance it drove.

<details>
<summary>Linear Velocity Code</summary>

```javascript
linear_velocity = float(data['records'][0]['fields']['linear_velocity'])
print(linear_velocity)
    twist_msg = Twist(
		    linear=Vector3(x=linear_velocity, y=0.0, z=0.0),
            )

     # Publish Twist message to control the robot
     self.publisher_.publish(twist_msg)

     self.get_logger().info('Publishing: "%s"' % twist_msg)
 except Exception as e:
     self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")
```


</details>

<details>
<summary>Angular Velocity Code</summary>

```javascript
angular_velocity = float(data['records'][0]['fields']['angular_velocity'])
print(angular_velocity)
		twist_msg = Twist(
		    angular=Vector3(x=0.0, y=0.0, z=angular_velocity)
            )

     # Publish Twist message to control the robot
     self.publisher_.publish(twist_msg)

     self.get_logger().info('Publishing: "%s"' % twist_msg)
 except Exception as e:
     self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")
```


</details>


In order to have the two communicate, it needed JSON data, or JavaScript Object Notation. It is a text-based format for storing and exchanging data between a server and web application. In this case, the Create was reading the JSON data that was being received from the Airtable. 


---


### Airtable Token


When using any information that is transmitted over the wifi, it is important to have a Token. An example of it is like a key to a door, the key being the token and the door being the Airtable. The data is what is inside the house.


Below is where our token was integrated into the code.


```javascript
URL = 'https://api.airtable.com/v0/appsojvRmm6osWlTy/tblRe0xbtlF19wkTE'

# Headers with your Access Token
# Format: {'Authorization': 'Bearer Access_Token'}
# Note that you need to leave "Bearer" before the access token
headers  = {'Authorization': 'Bearer patTEDXjeRx4YoqQq.8b3d88e36210e3bef42f3e1de117d034eb6a2e4260522a72da178baea7151e0c'}
```


---


    ###                                                  Different Views with Pi


![IMG_1656.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/17de24b8-77e9-43bc-b049-9af5f2713238/IMG_1656.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q25GT3W%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Fy%2B04bA7SeMj6j4mXi6QUxU1SRwRaWoHUEcVhOXkr1AiEAx4i%2FoLZL%2F41VL0Qtv3N74Y2N749pfARQ25vMJoqRSEYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDI8tGstLrXiq0zVEWCrcA5DHhrmvDyHBOotX96ASwYPfKIlsLcIMWXwfNKhTU1PgC4m5eaRKRntPwicWdOQqjz51RRNn0tRRNznZvYl0z7WleXmF2PFCSgJRpQqpX9Rjbq3MKOuL6ohlDB9jXPSHMpCL1CoME7i1KSa1iv5Lm%2Ffq5NOr3L%2F9ASaLqmWQI8gccrHvCpx9OkoUiOn3VLgnBoDf2nGTt2qQkky3Vtr%2FRG0CEEcB4piMqxAgXcmzEQhYcEd0YB73f69baqjJAuvwT5iDBAv04U0hhBHYQrJDOC9dQZB1bBChVw7p%2FHi%2BPh7yrk5cZxaBLKui2XAifKQ8TYOBmdkj91Q0WQswWg2OvOqQfZZ7nstfGtDUG%2Fj2ruHaiB%2BwQ57gwY86r33Y0zqpKwLAn53XQHjpHmfEZnIamWQtfaGnHpdvC8d3bXKnz1sJqY9Hk2pY3NwdkQzZECPyGiRp4NTFGPPBt5YvEeE9XfHCrfpOqRHiHFgQRiFrECFFboTH1yR28il9f1COKc9V6paIj%2BJPewMP79FIS%2BbsQg6f%2FcuXeRVNwBxzxKrO6T7wkUFj%2BeEhV%2BIdcubPukxEvNQK11WwsMUBV2Pp1ECeguVE2jL%2FCRIgS5vxYb8tpLA5FeYNOidOSDzMDAJIMO%2BLxM0GOqUBiUPNALZvblNWYxejBMpfXu4FNd4qE35wrf6ZpUQuD5UOR6r9SkXvfNpMG266hlusjQjyYodE8Ccr40f2WXzEucTNx5P%2Bmnmx2hiGD%2FlxZy5no%2BojKb3YKvY17Tj7WvhM3DAuXVbrygODdum3sN87TUX8SUr8H4uMi1Y2LhbuLQfyfJ6S1XZmIzYZKYD9skAZse0pr9BLk3z3qzctOgPgKH2siSNT&X-Amz-Signature=f11bc79399ca90ef42fe4e446a7241165cf28885d460d819cc8957a6031b35a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1655.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/6e3ea2d8-748a-486b-85f3-c6a1a98a8ad7/IMG_1655.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTFLDLPJ%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH5htbXSa3tykBKKN7IzMaIWEuhPc2g%2FHGABITdXXOMAiEAyo2%2FJ%2FxQaoVQvoYhzk9qlK869DjDLNQP0h5oP775sKwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCVek95HQRgHMDagOSrcAyKGrwLBOhKzAKySv7KHSyUoNRO6pqe9%2FrEFpugZGgSvmVvzmW%2BPGn7uINblBbfClOCbdbGCL5iTWg1NE%2FrgHkMPSi6J026oNC5ssi9FWvwcWYE0Z3K9G1lRAYG6Ii1iG%2FWuzjibLjqmqQ%2FAPTPJtYEbT1KCujesWQqncWYtMBuDj7ReZJkS6V%2FQih%2B4WQ%2BhDcDzFy5Fmo6x4yVPMY99qZPgaNH72%2FnvWtvm4LZWrYX8eaxk4uKPlivHyx7cMhOy4oPTgnJ%2FDid20nkOChvhyUPb4%2Bo%2B07jHYlpbUQSHIIrClrKqkQwVJg7UBZzDtD8IJYevs0ULQSeUhjrcnD9j6iw0LeL2Nv12s1hd0hubPeLT%2BR3%2BJXZuHKxzblzBmrrOIBJZcUjZ5%2FnCfkGGGsvj5zS8aeEvi1HalGy8jSqM3x%2BDiWpw9MSNvL7yT7VD98OwBtGF3g0AvS6c01bDbpELXX%2FzHhU86gPsdg%2F6A606slFYU7xHzpMWEzFb88tD0%2BkH%2FJaZFQpPMF7GM0zvSfL2RFMekUenN36BLBFoDW8rqsq8tE14GBxbbKs5oZMZV6yl0mhz3t2Nj0AtarhEE0Oi%2F0naXjrQR%2Bq0odO7t5j0n%2Bdj0Xu16ageJbtBUvESMMGKxM0GOqUBkC8xUivp0%2FMGAaNogNox2JBXBwqekIA6GTpvQXGKgkX6pBczBq%2BFliG9yjgkLshVczQF7uJJqJddu0Xl%2FGxZga7FwgG1tIuT7Zhl3Uk1WmLyLTSgeFBCrrA55999fyVDjDT15odHShKmb4UhnxBelvnEnZm1evJbkza78RnQpLEn1JFHNNQvHiuV9XTGqIE2JSeselxZ0q8FZDyNtqdzrn7zFRMD&X-Amz-Signature=0804104a1b339d8b6d6d40ef8384f11b37702a4498b31a92bb0ed73db44028a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1652.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/e93bb311-7fb2-4cd1-9749-93b51d697694/IMG_1652.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC72HQBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWy36OtXjojUDDCnJ%2BxQAV7%2Bgc7BZlUq9abvsndrIGYgIgcP5BHiQT2UDflv4pxPbvAb%2FPzRiRb2uZ%2FPFzLnffFzEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEjX%2BrQ3qpNiSR60RircA9wV%2BOZhxTvtYRTYsuIL8wZmiYd3SXtxSEjW8puQVhzKbyKjPVWbDuxs8AlHhnsSLxIA37H97hcf62Izh7Zvfjt5m82bAOI3jftd%2BJ8vqWgxTUYTT1SHlROu%2FnvLhyf08lSCkBtkhogD2mjQoTwEpnSHueIW6ClrlK4GBwjADT6UvsVuC95ww3nUSHFGUNecKtKNzGgy0QfjfFaDBiskSqfbAQRxFlxuvbot9JoTyYpSmvJEfBYLg3IKIsL5hb8TuK7GryJQUko6mr47kmy0JRg1XwktyroIspQoEVaQ23%2B6AbaaQqtLWGW22x9k%2BBpRsc620nochXmPfr7dV%2BiFUpz40jnU5Dez0CBLrlCnlC%2Bbe1Q6sduQx875bs5OCiI9bKyluHkmNsnECfS0yPuYhe0OmbhxT2jM%2FMiMi0bb3Iq2EL%2FemRk06GQQvUs%2BrSzfwB6Nwhqk1MypuLbg5zYWbBfo5E6et9cRs5g%2F8CtqVGScac5SRTDOfLeBXBWhx5mCgke6go%2BbGc4GmfsxHJ3DnZsv6pe0SB1WydYuZhT067bQCxGwychjsRU2kYYKH%2BKZnDwme74tWG5iiL9C%2FSNt6qSDMfx64DHOhpI7FHDHiZXF4%2BmYKY1KZ3LptVTMMO%2BKxM0GOqUBK%2F8VaEvGNMFnE%2FSOp7YQQAJcQQf149jiv9Peqd3A5sqz7Zjm9aDY%2Fd9s4IhwFAKw7R0pZVJtR%2F4I308wYJgvhYAqxt%2BGvhwTn3rIit7YZnd3rSJeCksVGBQlhwMViHJs6KmFhPbvuKIwJFAq9aBlHxpBLCWo0iJGpCTIA1P3XTRhYpIe8%2BPokn3S6Ckc9rrRPDLSIBeOlFH7Xk%2FmmfTjBY3ObAoD&X-Amz-Signature=a57af82a381fc5bb0b15a5dd556cbd10c259fec840a52d6d25a062c67357b5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


###                                                       Different Views of Create With Device


![IMG_1654.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/fef81c77-2d86-44d1-9bc9-9b45dfd97e88/IMG_1654.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXIOTZR%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH21iQtqPnNrgDu4%2Fh1SD3M8MbnObteyza0Vtp6btpSYAiEApzrt3ay5oqAVEf3aVEEw%2BhRrQq49Xgue7sdZIrIQdI0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOsb6Om51Pen6s8eRyrcAxBoVUboNzoN3kmKA3sIMBqpOSJWSbZBpFjDAQuIg7dQUWL%2BbEZAeEiSvXblbRoYZk%2F40EmeNzLtomqQoNq46qRrgh7GzEh4OYGd9q0DEsDBryh5%2BDyBrDL2Kjqh825STj4uOkAfDHw2tFuqENR4wknRMHWyM7jJo9BQ0STRSXgE7ZiX0mNmeJozgBB8Lhjhr%2FBNsfIJPl48y3plVOpXRMcGzHb7mZF0LRZ25PZXPxwPMM5sh6VTtzPj3ghER7WMcyPy0E4OwaU2tVbp9T%2FuCCBCG09%2BTRwwKAgdKGiC2YHojzs7zJP4ltX6O8fQ7s%2FOtutmwYD2jTUBmLaAgAtFpk7iC3EmZOhd0tyhDM9VkJOidPPICc0ef5egUelEhBiZCtFEt4o5p3arw0EbB%2BR9HqMbAx4hO5WAO6CInzBVvkonOVtizC8zyGtzIkXKx6TmC3K8pspm7dDL3%2FSSRmnhW7Py8ChJ7C4k9qrMcggmURQCpW%2BnLPtB00WsPm3YlAeLQ8YX0%2F%2BmUB5tOIPusJP01kx7Bxs%2FS8OuvkenTTKuJJORUZsODQNAp2qVGGt9anH6Ep%2FEZ0Abp4r4O%2BFJul46%2BiISQE26C5xK1j7c%2FERCgtM35N7s1iQDmU7XW7oEMP2KxM0GOqUB1W9K9IhsmEdaQ46lajeY6N2M3nuvUqRYnMHY7hhd5F179Z%2F18%2B8DKalr9cD7huQ9u2YWq1G%2F6jUB7jNuOFigI49l3MyIe3zOilIJuX9ggR2OIpiy9maWwOgZ%2BH3x4i%2B8aEVTRopFQPbvWhQXG5GhRFHRUt9c4Fnlxm29ncOApCc5Vw4Iw1v3RZnVuid1VLFFnZU7PhOccjiLFJWTzlGe%2F%2Bgn5pRF&X-Amz-Signature=88b705e2176f71e5e7996910907fdc2e6f1b865faf1dd71200739c94873d4634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


![IMG_1652.heic](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/975388f1-6940-4c44-a455-c299fa87dd72/IMG_1652.heic?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2ZWX5R6%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEPOtlz7hsCTfTQ7G4bsEmJySSzf2Yp9RqOzfTmzdPGAiAitCkxxlXgW2PhGHNNzTqaiNYfyNEiFep9%2BwJmti2V1Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZLMruWO56gQflmALKtwDNjfHgXivT4jGNw%2BvqqCEvBO3%2B19cWlH5qSmMs7n4csfwEuGxcrZNVbRPu%2F265mLLYBrdK6bdoNXSaP0RpFpVuV8tPmdbCqfiaOM0ytgJGxI8kcALww2sguLGrkyeMRUOKkF1RpguEbModI%2BkjoZtlkRp6iJCInSgjac5pH52zbuNNIk8ooZVPS5YSJr6w5ZYuP%2BHOkRnvaWAqR3Sz4PlTeZJM30DBbjv1oASHsJpz%2FengXFZfoERChjvRHX%2BgMpOv77oasz7XyjglZ5CAmFwaHvmH9cOaxxtJBo4Vik4iICwZWI9E7SSyQh1dAJCYu7xWm1QhRqtfZebDl03T3j67eUvhKFtdFLEzUmay6ieaF%2FbnsLSDCPlFAco2xp4nCZZ24%2FxCjhomZUc7gxU%2F3%2B%2BGYzLYufJaFpeoL1gsyQspX%2B28ol8sBvI00UnSQdTczLaQeWc2JF4fZIfwExhfmdLsRhkmG96zqNlARynF0sEz9DE23r8Zi87f8IrFd8m0pSnyLjJOp9a4zmWFfymf%2Fuem6LJ1pZtODCkoWxt7vNdHlTEVJrCg5PFg7vt7tPCwFsTc4CRm5MTutASwJzDttqg05swfWfGaObw0s0SMexywusbuSgU6PzQVCkZCywwu4rEzQY6pgEZ%2FSjOEgLlBTRAivQHFkD4o9k2zeBGtn%2F4o72pYGTdeMsrMctWOy649Wh1J3N%2FP%2FRNKp0A98KWXNKPvSXyit0iJmepQevt%2BuTZDaV3ePImYVPgwKzOdId4qCn2pTqtkZftsrSvqeBXuGfVkEmnnxMFK1JpuZiO%2F7GcGLKqLSbXbHkUJpzJ49cVwpnSl8IsP%2BfGceKIKRy%2F8kOaz81N89plfVSBf6AD&X-Amz-Signature=1dce5ab426eb92ee8fec0d856ab1fba5ee75d3bddfcb315e63e2d8bdbc1a26b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## Zoom


In order to know where I was in regards to the course, I zoomed from a different room. This way, I was able to see where on the course I was, and where I needed to go.

<details>
<summary>Course</summary>

![Screenshot_2024-04-17_at_10.45.18_PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/91e1110c-127d-4b40-80ad-958cc03bb0e1/12204850-3363-4706-8903-f70ba12ced3d/Screenshot_2024-04-17_at_10.45.18_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F6FARBL%2F20260311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260311T062810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjbrlGB57iArhkBwDuZjdJPoOCW0fQyhdoCYOlwAPeHAIgOszstRTGA%2FXiS%2BgyufLycpzW4RFzHyceYyT8EnKNwXkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOyN1XNBiphyHJTiHyrcA0nn9T%2FwNKHqGC%2Bw0RZ6w54tK1oSMddJ4OyYJ8E%2FrkWt%2FIlDVTGgfyvdaCSMWLAOQDNZ54NKdBxx6sCdaPCgDt7hst3K3DWk%2Bt8ud%2FK9r48f3wK0LbWDpxGSDs1eAXDZZQvqpZK4GP1V8X4htdnUfGhib8LEvQmz3wW%2BWowdljCN1uOEeM%2Bw4qaPRi21sSU%2BYwJwjJlR0LSYvcgmjsnKx1j4%2BXGU%2Fu8vjkoPZXTpV9qq7kvEAi8sErrWEJrS4OHAG25I1E4LmUJ65SlKc%2B7DYz6GCKlOmKCViCMkcrC2HbrA8afsnMF54d1stkIdOkmArSaEbdt%2FsuTyWwPZMBEujprYqH6pc5G%2BkZbcQdVJnP1o0B7QYMa8mL%2F61yx62P5bXCn%2FPWKuTq9PvepP7bpQdVEsCbz6R9JY9YaArw0huLP7GhSVoxxjr6vR6uFwbsKzs0h4TBk1qLC8jaQ5NKgtPc6qfx3tt4CAQ3ZbruK0p8bOfvv1DHavzTCsd3SNPfEKPPade5LDB6FnHqnoMVQjoEKkj5RbHkReIt6R7xTF8SMdz7tjX07t9XVRf7De42KBXFdWKIxwOBFIg0ozHdNCGDHFIw3MLpefH7WmcMn9H0SqWGUOI4CTQ8P%2BKnhzMPGLxM0GOqUBB3tTNhYFoUbG%2BkEWKAu6clvV7UPlCkSsbex2vtUcCVGvfTLwWbM3dZMUABzcvtRSBIqfuUO%2FwvIXFkKTFtctItPnRLbiM4aKA3LBaRzsAmCBqwfbrVccy9MdB4lwuewh84b0eDXe5jp7F1r%2Bxt1JG%2FPlG7X5%2FYlGldkQu0Bsh%2BmEVuIW0s9w717hUgY7ZOL9FgripjGP%2BUiFjsIQHrLjqxgrpjbh&X-Amz-Signature=76dda9f9663212987f33beeee45eb41aceb79a2f6967b826c50818ae57e3c59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


</details>

<details>
<summary>FINAL CODE HERE</summary>

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist, Vector3
import requests
import json

URL = ''
# Headers with your Access Token
# Format: {'Authorization': 'Bearer Access_Token'}
# Note that you need to leave "Bearer" before the access token
headers  = {'Authorization': '.'}

class SimplePublisher(Node):
    def __init__(self):
        super().__init__('simple_publisher')
        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)

        self.timer_period = 3.5
        self.timer = self.create_timer(self.timer_period, self.timer_callback)
        self.timer.override_system = True

        self.i = 0

        # Airtable setup
        # self.airtable_url = 'https://airtable.com/appsojvRmm6osWlTy/tblRe0xbtlF19wkTE/viwaAzv7EQNOKosHH?blocks=hide'
        # self.headers = {'Authorization': 'Bearer patTEDXjeRx4YoqQq.8b3d88e36210e3bef42f3e1de117d034eb6a2e4260522a72da178baea7151e0c'}

    def timer_callback(self):
        try:
            # Fetch control commands from Airtable
            r = requests.get(url=URL, headers=headers) #was respojnse
          #  r = requests.get(url=URL, headers=Headers)
            # Check if the request was successful
            r.raise_for_status()
            # Convert the JSON response to a Python dictionary
            data = r.json()
            print (data)
             #print(data.keys())
            print("hello 4")
            linear_velocity = float(data['records'][0]['fields']['linear_velocity'])
            angular_velocity = float(data['records'][0]['fields']['angular_velocity'])
            print(angular_velocity)
            print(linear_velocity)
            # Create Twist message with fetched control commands
            twist_msg = Twist(
                linear=Vector3(x=linear_velocity, y=0.0, z=0.0),
                angular=Vector3(x=0.0, y=0.0, z=angular_velocity)
            )

            # Publish Twist message to control the robot
            self.publisher_.publish(twist_msg)

            self.get_logger().info('Publishing: "%s"' % twist_msg)
        except Exception as e:
            self.get_logger().error(f"Error fetching/parsing Airtable data: {e}")

def main(args=None):
    rclpy.init(args=args)
    simple_publisher = SimplePublisher()

    try:
        rclpy.spin(simple_publisher)
    except KeyboardInterrupt:
        print('\nCaught Keyboard Interrupt')
        simple_publisher.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```


</details>


---


## Reflection


The most applicable thing I learned was to think about how to integrate different codes and their uses. I did not know how to use ROS2 before this project. I was aware of Tokens, but did not know they could be used integrated through code. I undervalued the use of ROS2 documentation as it helped us figure out how to get the Create to move.  

