using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectTrackingScript : MonoBehaviour
{
    private bool isTargetFound;

    [SerializeField]
    private AudioSource myAds;

    [SerializeField]
    private Transform boxHadiah;
    // Start is called before the first frame update
    void Start()
    {
        isTargetFound = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (isTargetFound == true)
        {
            boxHadiah.transform.Rotate(0, 1f, 0);
        }
        else
        {
            boxHadiah.transform.Rotate(0, 0, 0);
        }
    }
    public void TargetDitemukan()
    {
        isTargetFound = true;
        if (myAds.isPlaying == false)
        {
            myAds.Play();
        }
    }
    public void TargetHilang()
    {
        isTargetFound = false;
        if (myAds.isPlaying == true)
        {
            myAds.Stop();
        }
    }
}
