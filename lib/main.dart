import 'package:flutter/material.dart';

void main() => runApp(ChatPlug());

class ChatPlug extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ChatPlug',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Chatplug'),
        ),
        body: Center(
          child: Text('ChatPlug'),
        ),
      ),
    );
  }
}
